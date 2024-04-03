'use client'
import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import * as Form from '@radix-ui/react-form';
import { ChevronDownIcon } from '@radix-ui/react-icons';


const Page = () => {
    return (
        <Form.Root className="w-[260px]">
            <Form.Submit asChild>
                <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                    Post question
                </button>
            </Form.Submit>
        <Accordion.Root
            className="w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
            type="single"
            defaultValue="item-1"
            collapsible
        >
            <Accordion.Item  className="focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
             value="item-1">
                <Accordion.Header className="flex">
                <Accordion.Trigger className="text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none">
                    Is it accessible?
                    <ChevronDownIcon
                        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden
                    />
                </Accordion.Trigger>
                    <Accordion.Content
                        className="text-mauve11 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
                        <div className="py-[15px] px-5">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </div>
                    </Accordion.Content>
                </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item value="item-2">
                <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
                <Accordion.Content>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
                <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
                <Accordion.Content>

                        <Form.Field className="grid mb-[10px]" name="email">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Email</Form.Label>
                                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                                    Please enter your email
                                </Form.Message>
                                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                                    Please provide a valid email
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="email"
                                    required
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field className="grid mb-[10px]" name="question">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                    Question
                                </Form.Label>
                                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                                    Please enter a question
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
        <textarea
            className="box-border w-full shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
        />
                            </Form.Control>
                        </Form.Field>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </Form.Root>
    )
}

const currencys = [
    { label: 'CNY' },
    { label: 'USD' },
];

export default Page;