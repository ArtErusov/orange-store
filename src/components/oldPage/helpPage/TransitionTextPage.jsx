import MessageHelp from "./MessageHelp";

const TransitionTextPage = (props) =>{
    <MessageHelp
        text={props.reportChat.text}
        date={props.reportChat.date}
        recovery={props.reportChat.recovery}
    />
}

export default TransitionTextPage;