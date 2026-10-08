"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative flex w-full h-screen overflow-hidden lg:flex-row">
      <div className="bg-white col1 flex h-full w-1/2 flex-col overflow-hidden lg:w-1/2 inset-s-0 top-0 px-6 pb-2 pt-6 lg:px-10 lg:pt-10">
        <div className="logo block h-6 lg:h-8">
          <Link href="/">
            <svg
              height="100%"
              viewBox="0 0 80 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "auto" }}
            >
              <title>Linktree Logo</title>
              <desc>Linktree Logo Symbol and Word Mark</desc>
              <path
                d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991ZM13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991ZM23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687ZM33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408ZM38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604ZM49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796ZM60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z"
                fill="#000000"
              ></path>
              <path
                d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z"
                fill="#43E660"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="login flex flex-col gap-2 pt-24 align-center justify-center items-center">
          <div className="welcome flex flex-col items-center justify-center">
            <p className="font-black text-3xl scale-y-110">Join Linktree</p>
            <p className="text-gray-500 pt-3">Sign up for free!</p>
          </div>
          <div className="flex mt-10 flex-col justify-center align-center items-center w-[475px]">
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-xl py-4 pl-3 pr-10  text-black focus:outline-2 focus:outline-offset-2  border border-gray-300 w-full text-sm"
            />
            <button className="bg-[#e5e4e1] text-[#c1c0be] text-md  py-4 mt-4 rounded-full w-full tracking-wide font-bold">
              Continue
            </button>
            <p className="text-center text-xs mt-10 text-gray-500">
              By clicking <b>Continue</b>, you agree to Linktree's{" "}
              <a href="/privacy" className="underline underline-offset-1">
                privacy notice
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline underline-offset-1">
                T&Cs
              </a>{" "}
              and to receive offers, news and updates.
            </p>
            <p className="text-gray-500 text-lg mt-5 tracking-tight">OR</p>
            <button className="rounded-full w-full mt-5 py-4 text-md font-bold tracking-wide border border-gray-300 text-black flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.87-3c-1.07.72-2.44 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.09A12 12 0 0 0 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.3A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.57.37-2.3V6.61H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.95 1.12 15.24 0 12 0A12 12 0 0 0 1.27 6.61l4 3.09C6.22 6.86 8.87 4.75 12 4.75z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
            <button className="rounded-full w-full mt-5 py-4 text-md font-bold tracking-wide border border-gray-300 text-black flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.32 2.99-2.53 4.09zM12.03 7.25C11.88 5.02 13.69 3.18 15.82 3c.29 2.58-2.34 4.5-3.79 4.25z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
            <div className="flex gap-1 mt-5 align-center justify-center">
              <p className="text-gray-500 text-sm">Already have an account?</p>
              <a
                href="/login"
                className="text-purple-600 hover:underline underline-offset-2 text-sm"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 h-full w-1/2 overflow-hidden bg-[#225AC0] lg:block">
        <img
          className="h-full w-full object-cover object-center"
          src="/sign-up-image.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
