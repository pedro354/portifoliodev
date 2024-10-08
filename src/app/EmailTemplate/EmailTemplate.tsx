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
    email?: string;
  }
  
  export const EmailTemplate: React.FC<VercelInviteUserEmailProps> = ({
    name ="",
    previewText = ""
  }) => {
    return (
      <Html>
        <Head />
        <Preview>{name}, {previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Olá {name}
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Meu nome é {name},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Nova Mensagem: {previewText}
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  