import React from "react";
// Styles
import styled from "styled-components";
// State
import { useGetUsersQuery, useGetSocialsQuery } from "../app/apiSlice";
// Icons
import { Icon } from "@iconify/react";
// Config
import { Blog } from "../config";

// #region styled-components
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;
// #endregion

// #region component
const SocialLinks = () => {
  const { data: userData } = useGetUsersQuery();
  const { isSuccess, error, data: socialsData } = useGetSocialsQuery();

  React.useEffect(() => {
    if (error) {
      console.log(
        `${error.status} - check getSocials query in src/app/apiSlice.js`
      );
    }
  }, [error, socialsData]);

  return (
    <StyledSocialLinks>
      <a
        href={userData.html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      {isSuccess &&
        socialsData.map((element, index) => {
          let icon;
          
          // normalize provider if GitHub returns generic but URL hints real provider
          const url = element.url || "";
          let provider = (element.provider || "").toLowerCase();
          if (provider === "generic") {
            if (/udemy\.com/i.test(url)) provider = "udemy";
            else if (/(^https?:\/\/)?(t\.me|telegram\.org)\//i.test(url)) provider = "telegram";
          }

          switch (provider) {
            case "linkedin":
              icon = <Icon icon="fa-brands:linkedin" />;
              break;
            case "twitter":
              icon = <Icon icon="fa6-brands:square-x-twitter" />;
              break;
            case "facebook":
              icon = <Icon icon="fa-brands:facebook-square" />;
              break;
            case "instagram":
              icon = <Icon icon="fa-brands:instagram-square" />;
              break;
            case "tiktok":
              icon = <Icon icon="fa-brands:tiktok" />;
              break;
            case "udemy":
              icon = (
                <svg 
                  width="38" 
                  height="38" 
                  viewBox="0 0 133 133" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '38px', height: '38px' }}
                >
                  <path d="M66.5 0C103.227 0 133 29.7731 133 66.5C133 103.227 103.227 133 66.5 133C29.7731 133 0 103.227 0 66.5C0 29.7731 29.7731 0 66.5 0ZM53.7002 27.7998C51.4002 26.3998 45.3998 26.9002 43.7998 28.7002C42.9997 29.7005 40.7999 33.4003 39 37C34.8 45.5 30.3996 51.2998 23.5996 57.7998C17.3997 63.6997 16.5002 66.8004 20.2002 69.4004C23.0001 71.4002 25.3005 71.3995 28.9004 69.5996L31.5996 68.0996L30.2998 74.2998C27.6998 87.0998 29.1 95.3002 35 101.2C38.4999 104.7 39.2004 105 44.4004 105C56.0001 105 63.8998 97.6997 75.0996 76.7002L80 67.5V72.5C80 79.4 81.6004 84.6002 84.9004 88.2002C87.4001 90.9999 88.5002 91.3998 94.0996 91.7998C99.2996 92.0998 101.3 91.6998 105 89.7998C110.7 86.7998 114 82 114 76.5C114 69.9 112.2 69.4 106.6 74C101.1 78.4998 98.2996 79.0001 97.0996 75.7002C96.5996 74.5002 95.9998 67.2 95.7998 59.5C95.1998 43.9 93.8998 39.5004 89.2998 38.4004C83.5999 36.9004 82.1 38.5001 73 56C64 73.3 58 82.8 53.5 87C50.9 89.5 50.7998 89.5 49.2998 87.5C47.0999 84.4999 48.2001 74.4998 53 55.5C55.1998 46.8007 56.9997 38.4014 57 36.9004C57 33.5004 55.3002 28.7999 53.7002 27.7998Z" fill="currentColor"/>
                </svg>
              );
              break;
            case "telegram":
              icon = <Icon icon="fa6-brands:telegram" />;
              break;

            default:
              icon = <Icon icon="ph:link-bold" />;
              break;
          }
          return (
            <a
              key={index}
              href={element.url}
              aria-label="External link"
              className="link-icons"
            >
              {icon}
            </a>
          );
        })}
      {userData.blog && (
        <a
          href={userData.blog}
          aria-label="External link"
          className="link-icons"
        >
          {Blog ? Blog : <Icon icon="ph:link-bold" />}
        </a>
      )}
    </StyledSocialLinks>
  );
};
// #endregion

export default SocialLinks;
