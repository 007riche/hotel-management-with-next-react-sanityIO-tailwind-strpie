import { Rule } from "postcss";
import { defineField } from "sanity";

const user = {
    name: 'user',
    title: 'user',
    type: 'document',
    fields: [
        defineField({
            name: 'isAdmin',
            title: "Is Admin",
            type: 'boolean',
            description: "This is to check is the user is an administrator of the website",
            initialValue: false,
            validation: Rule => Rule.required(),
            // hidden: true,
        }),
        defineField({
            name: 'name',
            title: "Name",
            type: 'string',
            description: "this is the name of the user",
            readOnly: true,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: "Image",
            type: 'url',
        }),
        defineField({
            name: 'password',
            title: "Password",
            type: 'string',
            hidden: true,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'about',
            title: "About",
            type: 'text',
            description:"A brief description about the user",
        }),
    ]
};

export default user;