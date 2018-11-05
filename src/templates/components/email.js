import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./email-form";

const url = "https://whatthecancer.us19.list-manage.com/subscribe/post?u=8c05e593078ee803f63382c4d&id=875a4dad95";
const Email = ({children, background}) => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
        )}
    />
)

export default Email



