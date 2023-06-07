'use client';

import { createRef, FC, FormEvent, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm: FC<{}> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formQuery, setFormQuery] = useState({
    fullname: '',
    email: '',
    query: '',
  });

  useEffect(() => {
    if (isSubmitted)
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
  }, [isSubmitted]);

  const recaptchaRef = createRef<ReCAPTCHA>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef?.current?.execute();
  };

  const onReCAPTCHAChange = async (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }

    const res = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSSPREE_ID}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formQuery),
      }
    );

    if (res.ok) {
      setFormQuery({
        fullname: '',
        email: '',
        query: '',
      });
      setIsSubmitted(true);
    }

    recaptchaRef?.current?.reset();
  };

  const handleReset = () => {
    setFormQuery({
      fullname: '',
      email: '',
      query: '',
    });
  };

  return (
    <>
      <div className="max-w-3xl w-full p-8 mx-auto">
        <form className="" onSubmit={handleSubmit}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={onReCAPTCHAChange}
          />
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="">
              <label htmlFor="fullName" className="label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="input mt-2"
                placeholder="Full Name"
                value={formQuery.fullname}
                onInput={(e) =>
                  setFormQuery((q) => ({
                    ...q,
                    fullname: (e.target as HTMLInputElement).value,
                  }))
                }
                required
              />
            </div>
            <div className="">
              <label htmlFor="emailAddr" className="label">
                Email Address
              </label>
              <input
                type="email"
                name="emailAddr"
                id="emailAddr"
                className="input mt-2"
                placeholder="Email Address"
                value={formQuery.email}
                onInput={(e) =>
                  setFormQuery((q) => ({
                    ...q,
                    email: (e.target as HTMLInputElement).value,
                  }))
                }
                required
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="msg" className="label">
              Your Query / Suggestion.
            </label>
            <textarea
              name="msg"
              id="msg"
              className="input mt-2"
              placeholder="Write your Query"
              value={formQuery.query}
              onInput={(e) =>
                setFormQuery((q) => ({
                  ...q,
                  query: (e.target as HTMLTextAreaElement).value,
                }))
              }
              required
            ></textarea>
          </div>
          <div className="my-4 flex items-center justify-between space-x-2">
            {isSubmitted && (
              <span className="text-sm text-green-500">
                Query Submitted. Thank You !
              </span>
            )}
            <div className="flex items-center ml-auto space-x-2">
              <button
                type="reset"
                className="button_2 !pt-[.6rem] !px-4"
                onClick={handleReset}
              >
                <span className="">CLEAR</span>
              </button>
              <button
                type="submit"
                className="button_2 !pt-[.6rem] !px-4 !bg-blue-600 hover:!bg-blue-700 !text-white"
              >
                <span className="mr-2">SUBMIT</span>
                <span className="material-symbols-rounded">outgoing_mail</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
