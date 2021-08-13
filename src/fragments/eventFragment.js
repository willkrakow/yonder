import { graphql } from "gatsby";

export const eventFragment = graphql`
    fragment EventFragment on SanityEvent {
        _key
        _type
        name
        date(formatString: "dddd, MMMM DD")
        id
        subtitle
        eventTags
        description {
            children {
                text
            }
        }
        fromNow: date(fromNow: true)
        dateEnd(formatString: "dddd, MM DD")
        slug {
            current
        }

        description {
            children {
                text
                _key
                _type
            }
            _key
            _type
        }
        timeStart: date(formatString: "LT")
        timeEnd: dateEnd(formatString: "LT")
    }
`