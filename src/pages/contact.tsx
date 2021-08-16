/**@jsx jsx */
import React from "react";
import { Themed, Container, Box, Select, jsx, Button, Grid, Textarea, Input, Label, Card, Flex } from "theme-ui";
import Seo from '../components/seo'
import SocialIcons from "../components/navigation/socialIcons";

const ContactPage = () => {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [ message, setMessage ] = React.useState('')
  const [ eventDate, setEventDate ] = React.useState(Date.now().toString())
  const [ eventType, setEventType ] = React.useState<"Private party" | "Wedding ceremony" | "Wedding reception" | "Corporate event" | "Art show" | string>("Private party")

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {setEmail(e.currentTarget.value)}
  const handleName = (e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)
  const handleDate = (e: React.FormEvent<HTMLInputElement>) => setEventDate(e.currentTarget.value)
  const handleMessage = (e: React.FormEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)
  const handleType = (e: React.FormEvent<HTMLSelectElement>) => setEventType(e.currentTarget.value)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => console.log(e)

  return (
    <Container>
      <Themed.h2 sx={{ textAlign: "center" }} >Contact us</Themed.h2>
      <Seo pageTitle={`Contact Us`} />
      <Grid columns={[1, 2, null]} gap={[3, 4, 6]}>
        <Box>
          <Themed.h3>
            Tell us what you have in mind, and we'll make it work.
          </Themed.h3>
          <Themed.p sx={{ mb: 3 }}>
            Yonder is a cozy, invigorating, and charming place to host events
            both big and small.
          </Themed.p>
          <Themed.p>
            Let us know what you need, how many people you expect, and all that
            jazz. We'll contact you within 48 hours to confirm and go over the
            details of your event. If you have any questions, give us a call or
            stop on by.
          </Themed.p>
          <SocialIcons withText />
        </Box>
        <Card my={6} sx={{ width: "100%" }}>
          <Flex
            as="form"
            //@ts-ignore
            onSubmit={handleSubmit}
            sx={{
              flexDirection: "column",
              p: 4,
            }}
          >
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleName}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <Label htmlFor="eventDate">Event date</Label>
            <Input
              type="date"
              name="eventDate"
              id="eventDate"
              value={eventDate}
              onChange={handleDate}
            />
            <Label htmlFor="eventType">Event type</Label>
            <Select
              arrow={
                <Box
                  as="svg"
                  //@ts-ignore
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  sx={{
                    ml: -28,
                    mt: -28,
                    alignSelf: "center",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
                </Box>
              }
              value={eventType}
              defaultValue="Private party"
              onChange={handleType}
            >
              <option value="Wedding reception">Wedding reception</option>
              <option value="Wedding ceremony">Wedding ceremony</option>
              <option value="Corporate event">Corporate event</option>
              <option value="Private party">Private party</option>
              <option value="Art show">Art show</option>
              <option value="Music performance">Music performance</option>
              <option value="Other">Other</option>
            </Select>
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              onChange={handleMessage}
              rows={8}
              placeholder="Tell us about your event"
              value={message}
            />
            <Button type="submit" my={5} mx="auto">
              Submit
            </Button>
          </Flex>
        </Card>
      </Grid>
    </Container>
  );
};

export default ContactPage;
