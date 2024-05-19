
type Props = {
    text: string;
}

const HelloPage = ({ text }: Props) => {

    return (
        <main>
            <h1>{text}</h1>
        </main>
    )
}

export default HelloPage;