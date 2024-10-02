import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  
  interface VercelInviteUserEmailProps {
    name?: string;
    previewText?: string;
  }
  
  export const WelcomeDevs = ({
    name ="",
    previewText = ""
  }: VercelInviteUserEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>{name}, {previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Olá
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Hello {name},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  WelcomeDevs.PreviewProps = {
    name: 'Vercel'
  } as VercelInviteUserEmailProps;
  
  export default WelcomeDevs;
  