'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FAQSection.module.css';

const FAQSection: React.FC = () => {
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is my eligibility to book a car?",
            answer: "You should be 18 years old or above and you must possess a valid driving license."
        },
        {
            question: "What documents do I need to provide?",
            answer: "You need to provide a valid driving license and an ID proof."
        },
        {
            question: "Can I extend my booking?",
            answer: "Yes, you can extend your booking by contacting our support team."
        },
        {
            question: "What is the cancellation policy?",
            answer: "Cancellations made 24 hours before the booking time are free of charge."
        },
        {
            question: "Do you offer insurance for the rental period?",
            answer: "Yes, we offer full coverage insurance during the rental period."
        },
        {
            question: "What should I do in case of an accident?",
            answer: "Immediately contact our support team and local authorities for assistance."
        }
    ];

    return (
        <section className={styles.faqContainer}>
            <p className={styles.rentHeading}>Frequently Asked Questions</p>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <div
                        className={styles.eligibility}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.ageGroup}>
                            <p className={styles.bookCar}>{faq.question}</p>
                            <p
                                className={styles.license}
                                style={{
                                    display: openFAQIndex === index ? 'block' : 'none'
                                }}
                            >
                                {faq.answer}
                            </p>
                        </div>
                        <div>
                            <Image
                                src={openFAQIndex === index ? './xmark.svg' : './+mark.svg'}
                                alt="toggle-icon" width={30} height={30}
                            />
                        </div>
                    </div>
                    <hr className={styles.hr}/>
                </div>
            ))}
        </section>
    );
};

export default FAQSection;
