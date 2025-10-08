import React from "react";
import TypographyComponent from "../commons/typography.jsx";

const OpenSourceCard = ({
                         starCount = 19,
                         downloadCount = 3,
                         title = "React Native HEXShade",
                         description = "Generate lighter or darker tones instantly.",
                     }) => {
    return (
        <div className="bg-bg4 group flex items-center mt-[30px] rounded-[10px] px-[30px] py-[33px] lg:w-[350px] lg:hover:bg-bg1 transition-colors duration-300">
            <div className="text-left">
                {/* Stats Section */}
                <div className="flex gap-2.5 pb-2.5">
                    {/* Star Icon + Count */}
                    <div className="flex items-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.855 20.9662C16.631 20.9662 16.412 20.9162 16.209 20.8202L16.105 20.7692L11.998 18.4262L7.89101 20.7702L7.78501 20.8232C7.54142 20.9357 7.27239 20.9818 7.00524 20.9566C6.73809 20.9315 6.48235 20.8361 6.26401 20.6802C6.03224 20.511 5.85384 20.279 5.74998 20.0115C5.64611 19.7441 5.62114 19.4524 5.67801 19.1712L6.63501 14.5292L5.03301 13.0722L3.13801 11.3472L3.06001 11.2652C2.87465 11.0699 2.74527 10.8283 2.68544 10.5658C2.62562 10.3033 2.63756 10.0295 2.72001 9.77318C2.89301 9.24918 3.34001 8.86118 3.88001 8.76418L3.98201 8.74618L8.68301 8.22518L10.629 3.91518L10.689 3.80518C10.8188 3.57177 11.0086 3.37725 11.2387 3.24171C11.4688 3.10617 11.7309 3.03452 11.998 3.03418C12.541 3.03418 13.042 3.33218 13.307 3.80418L13.367 3.91618L15.315 8.22818L20.016 8.74918L20.12 8.76618C20.659 8.86618 21.106 9.25218 21.278 9.77818C21.448 10.2992 21.313 10.8762 20.938 11.2722L20.86 11.3502L17.362 14.5342L18.319 19.1662C18.3762 19.4493 18.3511 19.7429 18.2465 20.0121C18.1419 20.2813 17.9623 20.5149 17.729 20.6852C17.4742 20.8679 17.1686 20.9662 16.855 20.9662Z"
                                className="fill-bg1 group-hover:fill-bg2 transition-colors duration-300"
                            />
                        </svg>
                        <TypographyComponent
                            as="h5"
                            variant="h5"
                            className="text-bg1! lg:group-hover:text-bg2! ml-1"
                        >
                            {starCount}
                        </TypographyComponent>
                    </div>

                    {/* Download Icon + Count */}
                    <div className="flex items-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.375 6.00011C21.375 5.38136 21.2049 4.77451 20.8834 4.24589C20.5618 3.71728 20.1011 3.28724 19.5516 3.00279C19.0021 2.71834 18.385 2.59041 17.7677 2.63301C17.1504 2.6756 16.5567 2.88707 16.0515 3.24429C15.5463 3.60152 15.149 4.09076 14.9031 4.65854C14.6571 5.22631 14.572 5.85077 14.657 6.46365C14.742 7.07653 14.9939 7.65426 15.385 8.13367C15.7762 8.61308 16.2916 8.97573 16.875 9.18198V10.5001C16.875 10.5996 16.8355 10.6949 16.7652 10.7653C16.6948 10.8356 16.5995 10.8751 16.5 10.8751H7.50001C7.40055 10.8751 7.30517 10.8356 7.23484 10.7653C7.16452 10.6949 7.12501 10.5996 7.12501 10.5001V9.18198C7.87562 8.9166 8.50826 8.3944 8.91109 7.70769C9.31393 7.02098 9.46103 6.21396 9.3264 5.42928C9.19177 4.6446 8.78408 3.93277 8.17537 3.41961C7.56667 2.90645 6.79615 2.625 6.00001 2.625C5.20386 2.625 4.43334 2.90645 3.82464 3.41961C3.21594 3.93277 2.80824 4.6446 2.67361 5.42928C2.53898 6.21396 2.68608 7.02098 3.08892 7.70769C3.49176 8.3944 4.12439 8.9166 4.87501 9.18198V10.5001C4.87501 11.1963 5.15157 11.864 5.64385 12.3563C6.13614 12.8485 6.80381 13.1251 7.50001 13.1251H10.875V14.8182C10.1244 15.0836 9.49176 15.6058 9.08892 16.2925C8.68609 16.9792 8.53898 17.7862 8.67361 18.5709C8.80824 19.3556 9.21594 20.0674 9.82464 20.5806C10.4333 21.0938 11.2039 21.3752 12 21.3752C12.7962 21.3752 13.5667 21.0938 14.1754 20.5806C14.7841 20.0674 15.1918 19.3556 15.3264 18.5709C15.461 17.7862 15.3139 16.9792 14.9111 16.2925C14.5083 15.6058 13.8756 15.0836 13.125 14.8182V13.1251H16.5C17.1962 13.1251 17.8639 12.8485 18.3562 12.3563C18.8484 11.864 19.125 11.1963 19.125 10.5001V9.18198C19.7825 8.94852 20.3516 8.51741 20.7545 7.94775C21.1573 7.3781 21.374 6.69779 21.375 6.00011Z"
                                className="fill-bg1 group-hover:fill-bg2 transition-colors duration-300"
                            />
                        </svg>
                        <TypographyComponent
                            as="h5"
                            variant="h5"
                            className="text-bg1! lg:group-hover:text-bg2! ml-1"
                        >
                            {downloadCount}
                        </TypographyComponent>
                    </div>
                </div>

                {/* Title */}
                <TypographyComponent
                    as="h5"
                    variant="h5"
                    className="text-bg1! lg:group-hover:text-bg2! font-medium tracking-[-0.5px] leading-[30px]"
                >
                    {title}
                </TypographyComponent>

                {/* Description */}
                <p className="text-bg1/70 tracking-[-0.1px] leading-[26px] font-normal group-hover:text-white/70 mt-[5px]">
                    {description}
                </p>
            </div>

            {/* Arrow Icon */}
            <div className="rounded-full w-[42px] h-[42px] p-3.5 bg-bg2/20 group-hover:bg-bg4/20 flex items-center justify-center transition-colors duration-300">
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-bg1 group-hover:text-bg2 transition-colors duration-300"
                >
                    <path
                        d="M1 7.99984L16 8.22206"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 1L16 8L9 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default OpenSourceCard;