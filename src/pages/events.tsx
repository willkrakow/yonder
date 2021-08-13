/** @jsx jsx */
import React from "react";
import { jsx, Grid, Container, Button, Flex, Box, Themed, } from "theme-ui";
import { graphql, PageProps } from "gatsby";
import Seo from "../components/seo";
import { IEventsPrototype, IMonthGroup  } from "../typings";
import { EventCard } from "../components/event";
import { navigate } from '@reach/router'
import _ from "lodash";
import { eventTags } from "../typings";
import { monthName } from "../utils";
import useFilterList from "../utils/useFilterList";
import { lighten } from "@theme-ui/color";

  const getMonthNames = (groups: any[]) => {
    return groups.map((m) => monthName(parseInt(m.fieldValue)))
  };


const Events = (props: IEventsPrototype & PageProps) => {
  const { list, clear, filter, onFilter } = useFilterList()
  const [open, setOpen] = React.useState(false);

  const { group: monthGroups } = props.data.allSanityMutatedEvent;
  
  const months = React.useMemo(() => {
    return getMonthNames(monthGroups)
  }, [monthGroups])

  const toggle = () => setOpen(!open);

  const executeScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`#${e.currentTarget.value}`);
  };

  return (
    <Container sx={{ maxWidth: 11, px: [2, 2, 0], pt: 0 }}>
      <Seo pageTitle={`Events`} />

      <Grid columns={[1, "1fr 5fr", "1fr 5fr"]} gap={5}>
        <Box
          sx={{
            display: ["block", "block", "none"],
            zIndex: 99,
            p: 3,
          }}
        >
          <Button
            variant="action"
            sx={{
              fontWeight: "bold",
              left: 2,
              position: "relative",
              fontStyle: "normal",
            }}
            onClick={toggle}
          >
            Filters &#8942;
          </Button>

          {true && (
            <Button
              variant="action"
              sx={{ fontWeight: "bold", fontStyle: "normal", position: "absolute", right: 5 }}
              onClick={clear}
            >
              Clear filters &times;
            </Button>
          )}
          <Flex
            sx={{
              p: open ? 4 : 0,
              flexWrap: "wrap",
              transition: "all 0.2s ease",
              boxShadow: open ? "lg" : "none",
              backgroundColor: "background",
              borderTopWidth: 3,
              borderTopStyle: "solid",
              borderTopColor: lighten("warning", 0.2),
              position: "absolute",
              left: open ? 5 : 0,
              right: open ? 5 : "100%",
              overflow: "hidden",
              opacity: open ? 1.0 : 0.0,
            }}
          >
            <Themed.h5 sx={{ flexBasis: "100%" }}>Tags</Themed.h5>
            {eventTags.map((t) => (
              <Button
                key={t}
                variant={"action"}
                className={list.includes(t) ? "active" : ""}
                onClick={onFilter}
                value={t}
                sx={{ my: 3, mr: 4 }}
              >
                {`#${t.toLowerCase()}`}
              </Button>
            ))}
            <Themed.h5 sx={{ flexBasis: "100%" }}>Months</Themed.h5>
            {months.map((m) => (
              <Button
                key={m}
                onClick={executeScroll}
                value={m}
                variant={"action"}
                sx={{ my: 3, mr: 4 }}
              >
                {m}
              </Button>
            ))}
          </Flex>
        </Box>
        <Box sx={{ display: ["none", "block", "block"] }}>
          <Flex sx={{ flexDirection: "column", mb: 4, }}>
            <Themed.h5>Tags</Themed.h5>
            {eventTags.map((t) => (
              <Button
                key={t}
                variant={"action"}
                className={list.includes(t) ? "active" : ""}
                onClick={onFilter}
                value={t}
                sx={{ mb: 4 }}
              >
                {`#${t.toLowerCase()}`}
              </Button>
            ))}
            {list.length > 0 && <Button
              onClick={clear}
            >
              &times; Clear
            </Button>}
          </Flex>
          <Flex sx={{ flexDirection: "column", my: 4, mt: 5 }}>
            <Themed.h5>Jump to</Themed.h5>
            {months.map((m) => (
              <Button
                key={m}
                onClick={executeScroll}
                value={m}
                variant={"action"}
                sx={{ mb: 4 }}
              >
                {m}
              </Button>
            ))}
          </Flex>
        </Box>
        <Box>
          {monthGroups.map((g, index) => (
            <section
              key={g.fieldValue}
              id={`${monthName(parseInt(g.fieldValue))}`}
            >
              <MonthGroup
                index={index}
                monthNumberString={g.fieldValue}
                nodes={g.nodes}
                filterEvents={filter}
              />
            </section>
          ))}
        </Box>
      </Grid>
    </Container>
  );
};

// const FilterButton: React.FC<HTMLProps<HTMLButtonElement> & ButtonProps & { list: string[] }> = (props) => {
//   return <Button {...props}>{props.value}</Button>
// }

const MonthGroup: React.FC<IMonthGroup> = ({ nodes, filterEvents, monthNumberString, index }: IMonthGroup) => {
  return (
    <>
    <Themed.h4 sx={{ mt: index === 0 ? 0 : "initial"}} >{monthName(parseInt(monthNumberString))}</Themed.h4>
      {nodes.filter(filterEvents).map((e, index) => (
        <Container
          as="section"
          key={e.parent.id}
          sx={{ px: [2, 0, 0], pb: 4, pt: 3, mb: 6 }}
        >
          <EventCard index={index} e={e.parent} />
        </Container>
      ))}
    </>
  );
};

export const query = graphql`
  {
    allSanityMutatedEvent {
      group(field: month) {
        fieldValue
        nodes {
          month
          id
          parent {
            ... on SanityEvent {
              ...EventFragment
              id
              name
              image {
                asset {
                  gatsbyImageData(height: 400, aspectRatio: 1)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Events;
