"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        id: "skills",
        title: "Skills",
        content: (
            <ul className="mt-4 list-disc pl-2">
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
            </ul>
        )
    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className="mt-4 list-disc pl-2">
                <li>uau</li>
                <li>uau</li>
                <li>uau</li>
            </ul>
        )
    },
    {
        id: "certifications",
        title: "Certifications",
        content: (
            <ul className="mt-4 list-disc pl-2">
                <li>dasd</li>
                <li>tesfafte</li>
                <li>dasdf</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();


    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 lg:px-16">
                <Image src="/images/about-image.png" alt="About" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className=" text-white text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni et? Ipsam quae soluta nam ipsum, cumque sequi modi magnam repellat molestias temporibus autem pariatur at alias expedita eveniet itaque.s</p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                                selectTab={() => handleTabChange("skills")} 
                                active={tab === "skills"}>
                                    {" "}
                                    Skills{" "} 
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}>
                                {" "}
                                Education{" "} 
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}>
                                {" "}
                                Certifications{" "} 
                        </TabButton>
                    </div>
                    <div> {TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;