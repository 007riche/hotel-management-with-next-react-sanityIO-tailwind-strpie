import { Rule } from "postcss";
import { title } from "process";
import { defineField } from "sanity";


const roomTypes = [
    {
        title: "Basic", 
        value: "basic"
    },
    {
        title: "Luxury", 
        value: "luxury"
    },
    {
        title: "Suite", 
        value: "suite"
    },
];


const hotelRoom = {
    name: "hotelRoom",
    title: "Hotel Room",
    description: "",
    type: "document",
    fields: [
        defineField({
            name: 'name',
            title:'Name',
            type:'string',
            validation: Rule => Rule.required().max(50).error('Maximum of 50 characters'),
        }),
        defineField({
            name: 'slug',
            type:'slug',
            options: {
                source: 'name',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title:'Description',
            type:'text',
            validation: Rule => Rule.required().min(100).error('Minimum of 100 characters'),
        }),
        defineField({
            name: 'price',
            title:'Price',
            type:'number',
            validation: Rule => Rule.required().min(0).error('Minimum of 100 characters'),
        }),
        defineField({
            name: 'discount',
            title:'Discount',
            type:'number',
            initialValue: 0,
            validation: Rule => Rule.min(0),
        }),
        defineField({
            name: 'images',
            title:'Images',
            type:'array',
            of: [ 
                    {
                        type: 'object', 
                        fields: [
                                {name: 'url', type: 'url', title: 'URL'},
                                {name: 'file', type: 'file', title: 'File'},
                            ]
                    }
                ],
            validation: Rule => Rule.required().min(3).error('Minimum of of 3 images are required'),
        }),
        defineField({
            name: "coverImage",
            title: 'Cover Image',
            type: 'object',
            fields: [
                {name: "url", type: "url", title: "URL"},
                {name: "file", type: "file", title: "File"},
            ],
            validation: Rule => Rule.required().error('Cover Image'),
        }),
        defineField({
            name: 'type',
            title: 'Type of Room',
            type: 'string',
            options: {
                list: roomTypes,
            },
            validation: Rule => Rule.required(),
            initialValue: 'basic',
        }),
        defineField({
            name: 'specialNote',
            title: 'Special Note',
            type: 'text',
            validation: Rule => Rule.required(),
            initialValue: 'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave any thing behind, please contact the receptionist.',
        }),
        defineField({
            name: 'dimension',
            title: 'Dimension',
            type: 'string',
        }),
        defineField({
            name: 'numberOfBeds',
            title: 'Number of Beds',
            type: 'number',
            validation: Rule => Rule.required().min(1),
            initialValue: 1,
        }),
        defineField({
            name: 'offeredAmenities',
            title: 'Number of Beds',
            type: 'array',
            of: [ {
                type: 'object',
                fields: [{
                    name: 'icon',
                    title: 'Icon',
                    type: 'string',
                },
                {
                    name: 'amenity',
                    title: 'Amenity',
                    type: 'string',
                }]
            }],
        }),
        defineField({
            name: 'isBooked',
            title: 'Is the Room Booked',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'isFeatured',
            title: 'Is the Room Featured',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{
                type: 'review'
            }],
        }),
    ],
};

export default hotelRoom;