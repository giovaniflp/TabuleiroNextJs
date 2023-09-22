import BlocoBranco from "@/components/BlocoBranco"
import BlocoPreto from "@/components/BlocoPreto"

import "../styles/index.module.css"

import Head from "next/head"

const linhaBlocos = (
        <div style={{display:"flex"}}>
                    <BlocoBranco/>
                    <BlocoPreto/>
                    <BlocoBranco/>
                    <BlocoPreto/>
                    <BlocoBranco/>
                    <BlocoPreto/>
                    <BlocoBranco/>
                    <BlocoPreto/>
                </div>
)

const linhaBlocos2 = (
    <div style={{display:"flex"}}>
                <BlocoPreto/>
                <BlocoBranco/>
                <BlocoPreto/>
                <BlocoBranco/>
                <BlocoPreto/>
                <BlocoBranco/>
                <BlocoPreto/>
                <BlocoBranco/>
            </div>
)

export default function index(){
    return (
        <div>
            <Head>
                <style>
                    {
                        `
                        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

                        body{
                            margin: 0;
                            padding: 0;
                            border: 0;
                            background-color: gray;
                            width: 100vw;
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: 'Nunito', sans-serif;
                        }
                        `
                    }
                </style>
            </Head>
            <div style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                <h1>Tabuleiro de Xadrez feito em NextJs (React)</h1>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos2}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos2}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos2}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos}
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    {linhaBlocos2}
                </div>
            </div>
        </div>
    )
}