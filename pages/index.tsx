import Head from 'next/head'
import Portfolio from '../src/components/Portfolio'

export default function Index() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="This is the portfolio website for Sally Tan. She is a Software Engineer living in the greater Seattle area.
            Sally is currently a software engineer at Walmart Global Tech where she is helping build a remote checkout experience on an app.
            Previously, she was a product engineer at Kiddom where she was helping build an educational technology software for teachers and students to communicate with each other.
            She has also worked in various industries, providing full stack expertise to them.
            In Sally's free time, she enjoys creating programming tutorials, building web applications, and attending hackathons.
            Come learn more about her here." />
            <meta name="keywords" content="Sally Tan, Software Engineer, Computer Science, Technology, Frontend, Web, Backend, Development, Data, Portfolio, Personal, Website, Salita, Programming, Stan, HTML, CSS, JavaScript, TypeScript, ReactJS, Django, Go, Golang, SASS, SCSS, USA, United, States" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Sally Tan" />
            <link rel="icon" href="/icon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            <title>Sally Tan Portfolio</title>
            <Portfolio/>
        </Head>
    )
}