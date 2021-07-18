/**@jsx jsx */
import React from "react";
import { jsx, Container, Flex, Input, Themed, Button, Label, Textarea } from "theme-ui";
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormSectionProps {
  collectName: boolean;
  collectEmail: boolean;
  collectMessage: boolean;
  buttonText: string;
}

type Inputs = {
    name?: string,
    email?: string,
    message?: string,
}

const Form: React.FC<FormSectionProps> = ({
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
      <Themed.h3 sx={{ textAlign: "center" }} >Stay in touch</Themed.h3>
      <Themed.p sx={{ textAlign: "center" }}>Sign up for our newlstter to get notified about the latest events and happenings</Themed.p>
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 8,
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
            sx={{ textAlign: "center", padding: 2, margin: 4 }}
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
          <Themed.p sx={{ color: "warning" }}>Please enter your email</Themed.p>
        )}
        <Button variant="primary">{buttonText || "Submit"}</Button>
      </Flex>
    </Container>
  );
};

export default Form;
