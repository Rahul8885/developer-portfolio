import AnimatedBody from "@/animations/AnimatedBody";
import AnimatedTitle from "@/animations/AnimatedTitle";
import { LanyardCard } from "@/Lanyard/lanyard";

const About = () => {
    return (
        <section
            className="relative z-10 h-screen w-full overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex flex-col pl-10 pr-5 md:pl-20">
                <AnimatedTitle
                    text={"Rahul Akubattini"}
                    className={
                        "mb-10 text-left text-[40px] font-neue font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.03em]"}
                />

                <div className="flex w-[100%] flex-col lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[20px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[24px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody className="font-neue" text="I’m a Full Stack Developer with over 2 years of experience in building high-performance web and mobile applications. I specialize in React.js, React Native, Node.js, and AWS Cloud, with expertise in serverless architectures, API integrations, and infrastructure automation." />

                        <AnimatedBody
                            delay={0.1}
                            className="font-neue"
                            text="At Digi Enablers Pvt Ltd, I played a key role in developing 1800 Spirits, a US-based marketplace for alcoholic beverages. My work spans frontend development with React.js and Chakra UI, backend services using AWS Lambda and DynamoDB, and third-party API integrations like Stripe, DoorDash, and TaxJar."
                        />

                        {/* <AnimatedBody
                            delay={0.2}
                            text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
                        /> */}
                    </div>
                </div>
            </div>
            {/* <LanyardCard
      className="rounded-lg shadow-xl"
      height="80vh"
     
    /> */}
        </section>
    );
};

export default About;