import React, { useState } from "react";
import Head from "next/head";
import Minting from "../components/Minting";
import tw from 'tailwind-styled-components';

export default function IndexPage() {
    const [effect, setEffect] = useState(false);


    return (
        <Container>
            <Head>
                <title>
                    Neu Vibez Minting
                </title>
            </Head>


            <Minting />


        </Container>
    );
}
const Container = tw.div`
    flex
    flex-col
    justify-center
    items-center
    w-screen
  mx-auto
    h-screen


`;