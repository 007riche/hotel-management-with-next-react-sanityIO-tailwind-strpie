import { Rule } from "postcss";
import { defineType } from "sanity";

const review = {
name: 'review',
title: "Review",
type: 'document',
fields: [
    defineType({
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{
            type: 'user',
        }],
        validation: Rule => Rule.required(),
    }),
    defineType({
        name: 'hotelRoom',
        title: 'Hotel Room',
        type: 'reference',
        to: [{
            type: 'hotelRoom',
        }],
        validation: Rule => Rule.required(),
    }),
    defineType({
        name: 'content',
        title: 'Text content',
        type: 'text',
        validation: Rule => Rule.required(),
    }),
    defineType({
        name: 'userRating',
        title: 'User Rating',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5).error("A rating must have a number between 1 and 5"),
    }),
],
};


export default review;