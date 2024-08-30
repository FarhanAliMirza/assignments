import React from "react";
import {
  Text,
  Heading,
  Link,
  Button,
  Stack,
  Divider,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const SignUpForm = () => {
  return (
    <div>
      <Card w={"sm"}>
        <CardHeader>
          <Heading size="lg">Sign Up</Heading>
        </CardHeader>
        <CardBody>
          <Stack gap={0}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="abc@xyz.com" type="email" mb={3} />
            <FormLabel>First name</FormLabel>
            <Input placeholder="Jhon" mb={3} />
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Doe" mb={3} />
            <FormLabel>Password</FormLabel>
            <Input placeholder="helloworld" type="password" mb={3} />

            <Button colorScheme="blue" mt={3} alignSelf={"center"}>
              Sign up
            </Button>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter textAlign={"center"}>
            <Text as={"i"}>
              Already have an account? <Link href="/signin" textColor={"blue"}>Sign in</Link>
            </Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
