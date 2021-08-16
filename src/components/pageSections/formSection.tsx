/**@jsx jsx */
import React from "react";
import { jsx, Grid, Container, Flex, Box, Input, Themed, Button, Label, Textarea } from "theme-ui";
import { useForm, SubmitHandler } from 'react-hook-form'
import { StaticImage } from "gatsby-plugin-image";
import { alpha } from '@theme-ui/color'
import { QueryPrototypeProps } from "../../typings";
interface IFormSection {
  collectName: boolean;
  collectEmail: boolean;
  collectMessage: boolean;
  buttonText: string;
}

export type FormSectionProps = IFormSection & QueryPrototypeProps

type Inputs = {
    name?: string,
    email?: string,
    message?: string,
}

const FormSection: React.FC<FormSectionProps> = ({
  collectName,
  collectEmail=true,
  collectMessage,
  buttonText,
}) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    watch()
  return (
    <Container as="section">
      <Grid columns={1} sx={{ zIndex: 100 }}>
        <StaticImage
          sx={{ gridArea: "1/1" }}
          src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Colorful liquor bottles on a shelf"
          layout="constrained"
          height={700}
        />
        <Box
          sx={{
            zIndex: 111,
            gridArea: "1/1",
            display: "grid",
            position: "relative",
            placeItems: "center",
            placeContent: "center",
            py: 5,
          }}
        >
            <Flex
              sx={{
                flexDirection: "column",
                backgroundColor: alpha("dark", 0.8),
                p: 4,
              }}
            >
              <Themed.h3 sx={{ textAlign: "center", color: "light", mx: "auto" }}>
                Stay in touch
              </Themed.h3>
              <Themed.p sx={{ textAlign: "center", color: "light" }}>
                Sign up for our newsletter to get notified about the latest
                events and happenings
              </Themed.p>
              <Flex
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  maxWidth: 9,
                  margin: "auto",
                }}
                as="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {collectName && (
                  <Label htmlFor="name">
                    Name
                    <Input {...register("name")} type="text" name="name" />
                  </Label>
                )}
                {collectEmail && (
                  <Input
                    sx={{ textAlign: "center" }}
                    {...(register("email"), { required: true })}
                    type="text"
                    name="email"
                    placeholder="Email address"
                  />
                )}
                {collectMessage && (
                  <Label htmlFor="message">
                    Let us know your thoughts
                    <Textarea
                      {...register("message")}
                      cols={100}
                      rows={10}
                      name="message"
                      defaultValue="Dear Yonder..."
                    />
                  </Label>
                )}
                {errors.email && (
                  <Themed.p sx={{ color: "warning" }}>
                    Please enter your email
                  </Themed.p>
                )}
                <Button variant="primary">{buttonText || "Submit"}</Button>
              </Flex>
            </Flex>
        </Box>
      </Grid>
    </Container>
  );
};

export default FormSection;
