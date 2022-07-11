// Components
import { Link } from "react-router-dom";
import { Search } from "../search/Search";

// Libraries
import { t } from "i18next";

// Styles
import defaultAvatar from "../../../images/user.svg";

export const NavbarHome = ({ setSearchParams }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <>
      <nav>
        <div className="wrapper-navbar-home">
          <div className="log">
            <Link to={`/Home`}>
              <svg
                viewBox="0 0 220 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.7891 44.2882C86.6689 36.2926 84.4956 28.4746 80.4931 21.6391C76.4906 14.8037 70.8034 9.19774 64.0171 5.39844V57.4001L86.7891 44.2882Z"
                  fill="#00D1E0"
                />
                <path
                  d="M65.2113 83.8953C71.5656 80.0513 76.8724 74.5944 80.6326 68.0381C84.3927 61.4817 86.4826 54.0414 86.7056 46.417L43.9678 70.7711L65.2113 83.8953Z"
                  fill="#00D1E0"
                />
                <path
                  d="M23.1899 84.8242C29.4293 88.2355 36.3767 90.0183 43.4304 90.0183C50.4841 90.0183 57.4314 88.2355 63.6708 84.8242L23.1899 59.7148V84.8242Z"
                  fill="#00D1E0"
                />
                <path
                  d="M0.0834961 47.7294C0.504361 54.9537 2.5998 61.9661 6.192 68.1716C9.7842 74.377 14.7671 79.5925 20.718 83.3753V35.2861L0.0834961 47.7294Z"
                  fill="#00D1E0"
                />
                <path
                  d="M18.6165 8.05957C12.8672 12.2019 8.1708 17.7262 4.92884 24.1602C1.68689 30.5941 -0.00423209 37.7464 5.87958e-05 45.0055C-0.00587897 45.0921 -0.00587897 45.179 5.87958e-05 45.2655L40.8272 20.9238L18.6165 8.05957Z"
                  fill="#00D1E0"
                />
                <path
                  d="M62.5719 4.63038C56.0272 1.28969 48.7764 -0.287912 41.4886 0.0431669C34.2008 0.374245 27.1109 2.60334 20.873 6.52473L62.5719 32.377V4.63038Z"
                  fill="#00D1E0"
                />
                <path
                  className="text-logo"
                  d="M102.91 40.9287V37.5307H108.857C109.672 37.5307 110.386 37.3721 110.998 37.055C111.632 36.7152 112.13 36.2508 112.493 35.6618C112.855 35.0502 113.036 34.3366 113.036 33.5211C113.036 32.7055 112.855 32.0033 112.493 31.4143C112.13 30.8027 111.632 30.3383 110.998 30.0211C110.386 29.6813 109.672 29.5114 108.857 29.5114H102.91V26.1134H109.061C110.556 26.1134 111.893 26.4192 113.07 27.0309C114.271 27.6425 115.211 28.5033 115.891 29.6134C116.593 30.7234 116.944 32.0259 116.944 33.5211C116.944 35.0162 116.593 36.3187 115.891 37.4288C115.211 38.5388 114.271 39.3996 113.07 40.0112C111.893 40.6229 110.556 40.9287 109.061 40.9287H102.91ZM100.226 49.8994V26.1134H104.134V49.8994H100.226ZM120.258 49.8994V33.589H123.996V49.8994H120.258ZM122.127 30.5988C121.492 30.5988 120.96 30.3836 120.53 29.9532C120.122 29.5227 119.918 28.9904 119.918 28.3561C119.918 27.7218 120.122 27.1894 120.53 26.759C120.96 26.3286 121.492 26.1134 122.127 26.1134C122.784 26.1134 123.316 26.3286 123.724 26.759C124.131 27.1894 124.335 27.7218 124.335 28.3561C124.335 28.9904 124.131 29.5227 123.724 29.9532C123.316 30.3836 122.784 30.5988 122.127 30.5988ZM135.697 50.2392C134.089 50.2392 132.628 49.8654 131.314 49.1179C130.023 48.3703 129.003 47.3509 128.256 46.0597C127.508 44.7684 127.134 43.3299 127.134 41.7442C127.134 40.1358 127.508 38.6973 128.256 37.4288C129.003 36.1375 130.023 35.1181 131.314 34.3706C132.628 33.623 134.089 33.2492 135.697 33.2492C136.966 33.2492 138.144 33.4984 139.231 33.9968C140.341 34.4725 141.281 35.1634 142.052 36.0696L139.605 38.5501C139.129 37.9838 138.552 37.5647 137.872 37.2928C137.215 36.9983 136.49 36.8511 135.697 36.8511C134.769 36.8511 133.942 37.0663 133.217 37.4967C132.515 37.9045 131.96 38.4708 131.552 39.1957C131.167 39.9206 130.974 40.7701 130.974 41.7442C130.974 42.6957 131.167 43.5452 131.552 44.2927C131.96 45.0176 132.515 45.5953 133.217 46.0257C133.942 46.4335 134.769 46.6373 135.697 46.6373C136.49 46.6373 137.215 46.5014 137.872 46.2296C138.552 45.9351 139.129 45.5047 139.605 44.9383L142.052 47.4189C141.281 48.325 140.341 49.0273 139.231 49.5256C138.144 50.0014 136.966 50.2392 135.697 50.2392ZM151.882 50.2392C150.002 50.2392 148.405 49.8994 147.091 49.2198C145.777 48.5402 144.599 47.5435 143.557 46.2296L146.208 43.5791C146.865 44.5306 147.646 45.2781 148.552 45.8218C149.458 46.3428 150.614 46.6034 152.018 46.6034C153.332 46.6034 154.374 46.3315 155.144 45.7878C155.937 45.2442 156.334 44.4966 156.334 43.5452C156.334 42.7523 156.13 42.1067 155.722 41.6083C155.314 41.1099 154.771 40.7022 154.091 40.385C153.434 40.0452 152.698 39.7507 151.882 39.5015C151.089 39.2297 150.285 38.9352 149.47 38.6181C148.677 38.2783 147.941 37.8592 147.261 37.3608C146.604 36.8624 146.072 36.2168 145.664 35.4239C145.256 34.6311 145.052 33.623 145.052 32.3997C145.052 30.9952 145.392 29.8059 146.072 28.8318C146.774 27.8351 147.714 27.0762 148.892 26.5552C150.07 26.0341 151.384 25.7736 152.834 25.7736C154.397 25.7736 155.79 26.0794 157.013 26.6911C158.259 27.3027 159.267 28.0843 160.037 29.0357L157.387 31.6861C156.707 30.9159 155.994 30.3496 155.246 29.9871C154.521 29.602 153.683 29.4095 152.732 29.4095C151.554 29.4095 150.625 29.6473 149.945 30.1231C149.288 30.5988 148.96 31.267 148.96 32.1279C148.96 32.8528 149.164 33.4418 149.572 33.8948C149.979 34.3252 150.512 34.699 151.169 35.0162C151.848 35.3107 152.585 35.5938 153.377 35.8657C154.193 36.1375 154.997 36.4433 155.79 36.7831C156.605 37.1229 157.342 37.5647 157.999 38.1084C158.678 38.6294 159.222 39.309 159.63 40.1472C160.037 40.9853 160.241 42.0387 160.241 43.3073C160.241 45.4367 159.482 47.1244 157.965 48.3703C156.47 49.6162 154.442 50.2392 151.882 50.2392ZM163.628 49.8994V33.589H167.366V49.8994H163.628ZM174.468 49.8994V40.1811C174.468 39.0938 174.128 38.2556 173.448 37.6666C172.769 37.055 171.93 36.7492 170.934 36.7492C170.254 36.7492 169.642 36.8851 169.099 37.1569C168.578 37.4288 168.159 37.8252 167.841 38.3462C167.524 38.8446 167.366 39.4562 167.366 40.1811L165.905 39.3656C165.905 38.1197 166.176 37.0436 166.72 36.1375C167.264 35.2314 168 34.5291 168.929 34.0308C169.858 33.5097 170.9 33.2492 172.055 33.2492C173.21 33.2492 174.252 33.4984 175.181 33.9968C176.11 34.4951 176.846 35.1974 177.39 36.1035C177.934 37.0097 178.205 38.097 178.205 39.3656V49.8994H174.468ZM185.307 49.8994V40.1811C185.307 39.0938 184.967 38.2556 184.288 37.6666C183.608 37.055 182.77 36.7492 181.773 36.7492C181.116 36.7492 180.516 36.8851 179.972 37.1569C179.429 37.4288 178.998 37.8252 178.681 38.3462C178.364 38.8446 178.205 39.4562 178.205 40.1811L176.099 39.3656C176.212 38.1197 176.574 37.0436 177.186 36.1375C177.798 35.2314 178.579 34.5291 179.531 34.0308C180.505 33.5097 181.569 33.2492 182.725 33.2492C183.903 33.2492 184.967 33.4984 185.919 33.9968C186.87 34.4951 187.629 35.1974 188.195 36.1035C188.762 37.0097 189.045 38.097 189.045 39.3656V49.8994H185.307ZM192.93 49.8994V33.589H196.668V49.8994H192.93ZM194.799 30.5988C194.164 30.5988 193.632 30.3836 193.202 29.9532C192.794 29.5227 192.59 28.9904 192.59 28.3561C192.59 27.7218 192.794 27.1894 193.202 26.759C193.632 26.3286 194.164 26.1134 194.799 26.1134C195.456 26.1134 195.988 26.3286 196.396 26.759C196.804 27.1894 197.007 27.7218 197.007 28.3561C197.007 28.9904 196.804 29.5227 196.396 29.9532C195.988 30.3836 195.456 30.5988 194.799 30.5988Z"
                  fill="#1D1D1B"
                />
                <path
                  className="text-logo"
                  d="M103.303 68.226L101.22 63.3833H102.231L103.778 67.1745H103.455L105.082 63.3833H106.093L103.849 68.226H103.303ZM101.928 70.1974L103.343 67.2959L103.849 68.226L102.939 70.1974H101.928ZM108.846 68.2866C108.375 68.2866 107.95 68.1754 107.573 67.953C107.195 67.7306 106.895 67.4307 106.673 67.0532C106.45 66.669 106.339 66.2411 106.339 65.7693C106.339 65.3042 106.45 64.8863 106.673 64.5156C106.895 64.1382 107.195 63.8382 107.573 63.6158C107.95 63.3934 108.375 63.2822 108.846 63.2822C109.311 63.2822 109.733 63.3934 110.11 63.6158C110.494 63.8315 110.798 64.1281 111.02 64.5055C111.242 64.8829 111.354 65.3042 111.354 65.7693C111.354 66.2411 111.242 66.669 111.02 67.0532C110.798 67.4307 110.494 67.7306 110.11 67.953C109.733 68.1754 109.311 68.2866 108.846 68.2866ZM108.846 67.4071C109.15 67.4071 109.419 67.3363 109.655 67.1948C109.891 67.0532 110.076 66.8611 110.211 66.6185C110.346 66.3691 110.413 66.086 110.413 65.7693C110.413 65.4592 110.343 65.1829 110.201 64.9402C110.066 64.6976 109.881 64.5089 109.645 64.3741C109.416 64.2325 109.15 64.1618 108.846 64.1618C108.543 64.1618 108.273 64.2325 108.038 64.3741C107.802 64.5089 107.616 64.6976 107.482 64.9402C107.347 65.1829 107.279 65.4592 107.279 65.7693C107.279 66.086 107.347 66.3691 107.482 66.6185C107.616 66.8611 107.802 67.0532 108.038 67.1948C108.273 67.3363 108.543 67.4071 108.846 67.4071ZM114.32 68.2866C113.922 68.2866 113.565 68.199 113.248 68.0238C112.938 67.8418 112.696 67.5924 112.52 67.2756C112.345 66.9589 112.258 66.5915 112.258 66.1737V63.3833H113.167V66.1332C113.167 66.3961 113.211 66.6252 113.299 66.8207C113.393 67.0094 113.528 67.1543 113.703 67.2554C113.879 67.3565 114.084 67.4071 114.32 67.4071C114.677 67.4071 114.957 67.2959 115.159 67.0734C115.361 66.8443 115.462 66.5309 115.462 66.1332V63.3833H116.372V66.1737C116.372 66.5915 116.285 66.9589 116.109 67.2756C115.934 67.5924 115.692 67.8418 115.382 68.0238C115.078 68.199 114.724 68.2866 114.32 68.2866ZM117.592 68.1855V63.3833H118.502V68.1855H117.592ZM118.502 65.4457L118.158 65.2941C118.158 64.6807 118.3 64.1921 118.583 63.8281C118.866 63.4642 119.273 63.2822 119.806 63.2822C120.049 63.2822 120.268 63.326 120.463 63.4136C120.659 63.4945 120.841 63.6327 121.009 63.8281L120.413 64.4448C120.311 64.337 120.2 64.2595 120.079 64.2123C119.958 64.1651 119.816 64.1415 119.654 64.1415C119.317 64.1415 119.041 64.2494 118.825 64.4651C118.61 64.6807 118.502 65.0076 118.502 65.4457ZM125.305 68.1855L123.405 63.3833H124.355L125.73 67.124H125.427L126.791 63.3833H127.317L128.682 67.124H128.379L129.754 63.3833H130.704L128.813 68.1855H128.278L126.893 64.5561H127.226L125.831 68.1855H125.305ZM133.568 68.2866C133.097 68.2866 132.672 68.1754 132.295 67.953C131.917 67.7306 131.617 67.4307 131.395 67.0532C131.172 66.669 131.061 66.2411 131.061 65.7693C131.061 65.3042 131.172 64.8863 131.395 64.5156C131.617 64.1382 131.917 63.8382 132.295 63.6158C132.672 63.3934 133.097 63.2822 133.568 63.2822C134.034 63.2822 134.455 63.3934 134.832 63.6158C135.216 63.8315 135.52 64.1281 135.742 64.5055C135.965 64.8829 136.076 65.3042 136.076 65.7693C136.076 66.2411 135.965 66.669 135.742 67.0532C135.52 67.4307 135.216 67.7306 134.832 67.953C134.455 68.1754 134.034 68.2866 133.568 68.2866ZM133.568 67.4071C133.872 67.4071 134.141 67.3363 134.377 67.1948C134.613 67.0532 134.799 66.8611 134.933 66.6185C135.068 66.3691 135.136 66.086 135.136 65.7693C135.136 65.4592 135.065 65.1829 134.923 64.9402C134.788 64.6976 134.603 64.5089 134.367 64.3741C134.138 64.2325 133.872 64.1618 133.568 64.1618C133.265 64.1618 132.996 64.2325 132.76 64.3741C132.524 64.5089 132.338 64.6976 132.204 64.9402C132.069 65.1829 132.001 65.4592 132.001 65.7693C132.001 66.086 132.069 66.3691 132.204 66.6185C132.338 66.8611 132.524 67.0532 132.76 67.1948C132.996 67.3363 133.265 67.4071 133.568 67.4071ZM137.101 68.1855V63.3833H138.011V68.1855H137.101ZM138.011 65.4457L137.667 65.2941C137.667 64.6807 137.809 64.1921 138.092 63.8281C138.375 63.4642 138.783 63.2822 139.315 63.2822C139.558 63.2822 139.777 63.326 139.972 63.4136C140.168 63.4945 140.35 63.6327 140.518 63.8281L139.922 64.4448C139.821 64.337 139.709 64.2595 139.588 64.2123C139.467 64.1651 139.325 64.1415 139.163 64.1415C138.826 64.1415 138.55 64.2494 138.334 64.4651C138.119 64.6807 138.011 65.0076 138.011 65.4457ZM143.033 68.2866C142.588 68.2866 142.19 68.1788 141.84 67.9631C141.489 67.7407 141.21 67.4408 141.001 67.0633C140.799 66.6859 140.698 66.2613 140.698 65.7895C140.698 65.3177 140.799 64.8931 141.001 64.5156C141.21 64.1382 141.489 63.8382 141.84 63.6158C142.19 63.3934 142.588 63.2822 143.033 63.2822C143.39 63.2822 143.714 63.3597 144.004 63.5147C144.293 63.663 144.526 63.8719 144.701 64.1415C144.883 64.4044 144.984 64.7111 145.004 65.0616V66.5073C144.984 66.851 144.886 67.1577 144.711 67.4273C144.536 67.6969 144.303 67.9092 144.014 68.0642C143.724 68.2125 143.397 68.2866 143.033 68.2866ZM143.185 67.4273C143.488 67.4273 143.751 67.3565 143.973 67.215C144.202 67.0734 144.381 66.8814 144.509 66.6387C144.637 66.3893 144.701 66.1063 144.701 65.7895C144.701 65.4592 144.634 65.1728 144.499 64.9301C144.371 64.6875 144.192 64.4954 143.963 64.3539C143.741 64.2123 143.478 64.1415 143.174 64.1415C142.871 64.1415 142.605 64.2123 142.376 64.3539C142.147 64.4954 141.965 64.6909 141.83 64.9402C141.702 65.1829 141.638 65.4626 141.638 65.7794C141.638 66.1029 141.702 66.3893 141.83 66.6387C141.965 66.8814 142.147 67.0734 142.376 67.215C142.612 67.3565 142.881 67.4273 143.185 67.4273ZM145.56 68.1855H144.64V66.8915L144.812 65.7187L144.64 64.5561V60.967H145.56V68.1855ZM146.936 69.2976L147.563 68.0946L147.886 68.0137C147.852 68.0878 147.809 68.1485 147.755 68.1957C147.707 68.2428 147.647 68.2664 147.573 68.2664C147.431 68.2664 147.3 68.2091 147.178 68.0946C147.064 67.9732 147.006 67.825 147.006 67.6497C147.006 67.4543 147.071 67.2925 147.199 67.1644C147.327 67.0296 147.488 66.9622 147.684 66.9622C147.859 66.9622 148.014 67.0296 148.149 67.1644C148.284 67.2925 148.351 67.4543 148.351 67.6497C148.351 67.7239 148.334 67.8148 148.301 67.9227C148.274 68.0238 148.216 68.1552 148.129 68.317L147.461 69.5807L146.936 69.2976ZM153.349 68.226L151.267 63.3833H152.278L153.825 67.1745H153.501L155.129 63.3833H156.14L153.895 68.226H153.349ZM151.975 70.1974L153.39 67.2959L153.895 68.226L152.986 70.1974H151.975ZM158.893 68.2866C158.421 68.2866 157.996 68.1754 157.619 67.953C157.242 67.7306 156.942 67.4307 156.719 67.0532C156.497 66.669 156.386 66.2411 156.386 65.7693C156.386 65.3042 156.497 64.8863 156.719 64.5156C156.942 64.1382 157.242 63.8382 157.619 63.6158C157.996 63.3934 158.421 63.2822 158.893 63.2822C159.358 63.2822 159.779 63.3934 160.157 63.6158C160.541 63.8315 160.844 64.1281 161.066 64.5055C161.289 64.8829 161.4 65.3042 161.4 65.7693C161.4 66.2411 161.289 66.669 161.066 67.0532C160.844 67.4307 160.541 67.7306 160.157 67.953C159.779 68.1754 159.358 68.2866 158.893 68.2866ZM158.893 67.4071C159.196 67.4071 159.466 67.3363 159.702 67.1948C159.938 67.0532 160.123 66.8611 160.258 66.6185C160.392 66.3691 160.46 66.086 160.46 65.7693C160.46 65.4592 160.389 65.1829 160.248 64.9402C160.113 64.6976 159.927 64.5089 159.692 64.3741C159.462 64.2325 159.196 64.1618 158.893 64.1618C158.59 64.1618 158.32 64.2325 158.084 64.3741C157.848 64.5089 157.663 64.6976 157.528 64.9402C157.393 65.1829 157.326 65.4592 157.326 65.7693C157.326 66.086 157.393 66.3691 157.528 66.6185C157.663 66.8611 157.848 67.0532 158.084 67.1948C158.32 67.3363 158.59 67.4071 158.893 67.4071ZM164.366 68.2866C163.969 68.2866 163.612 68.199 163.295 68.0238C162.985 67.8418 162.742 67.5924 162.567 67.2756C162.392 66.9589 162.304 66.5915 162.304 66.1737V63.3833H163.214V66.1332C163.214 66.3961 163.258 66.6252 163.345 66.8207C163.44 67.0094 163.575 67.1543 163.75 67.2554C163.925 67.3565 164.131 67.4071 164.366 67.4071C164.724 67.4071 165.003 67.2959 165.206 67.0734C165.408 66.8443 165.509 66.5309 165.509 66.1332V63.3833H166.419V66.1737C166.419 66.5915 166.331 66.9589 166.156 67.2756C165.981 67.5924 165.738 67.8418 165.428 68.0238C165.125 68.199 164.771 68.2866 164.366 68.2866ZM167.638 68.1855V63.3833H168.548V68.1855H167.638ZM168.548 65.4457L168.204 65.2941C168.204 64.6807 168.346 64.1921 168.629 63.8281C168.912 63.4642 169.32 63.2822 169.852 63.2822C170.095 63.2822 170.314 63.326 170.51 63.4136C170.705 63.4945 170.887 63.6327 171.055 63.8281L170.459 64.4448C170.358 64.337 170.247 64.2595 170.125 64.2123C170.004 64.1651 169.863 64.1415 169.701 64.1415C169.364 64.1415 169.087 64.2494 168.872 64.4651C168.656 64.6807 168.548 65.0076 168.548 65.4457ZM176.504 68.2866C176.14 68.2866 175.81 68.2125 175.514 68.0642C175.224 67.9092 174.991 67.6969 174.816 67.4273C174.641 67.1577 174.543 66.851 174.523 66.5073V65.0616C174.543 64.7111 174.641 64.4044 174.816 64.1415C174.998 63.8719 175.234 63.663 175.524 63.5147C175.82 63.3597 176.147 63.2822 176.504 63.2822C176.942 63.2822 177.337 63.3934 177.687 63.6158C178.044 63.8382 178.324 64.1382 178.526 64.5156C178.729 64.8931 178.83 65.3177 178.83 65.7895C178.83 66.2613 178.729 66.6859 178.526 67.0633C178.324 67.4408 178.044 67.7407 177.687 67.9631C177.337 68.1788 176.942 68.2866 176.504 68.2866ZM176.353 67.4273C176.656 67.4273 176.922 67.3565 177.151 67.215C177.381 67.0734 177.562 66.8814 177.697 66.6387C177.832 66.3893 177.899 66.1029 177.899 65.7794C177.899 65.4626 177.832 65.1795 177.697 64.9301C177.562 64.6807 177.381 64.4887 177.151 64.3539C176.922 64.2123 176.659 64.1415 176.363 64.1415C176.059 64.1415 175.793 64.2123 175.564 64.3539C175.335 64.4887 175.156 64.6807 175.028 64.9301C174.9 65.1795 174.836 65.466 174.836 65.7895C174.836 66.1063 174.897 66.3893 175.018 66.6387C175.146 66.8814 175.325 67.0734 175.554 67.215C175.79 67.3565 176.056 67.4273 176.353 67.4273ZM173.977 70.1974V63.3833H174.887V64.647L174.715 65.8097L174.887 66.9825V70.1974H173.977ZM183.258 68.1855V65.3851C183.258 65.0211 183.144 64.7212 182.914 64.4853C182.685 64.2494 182.389 64.1314 182.025 64.1314C181.782 64.1314 181.566 64.1854 181.378 64.2932C181.189 64.401 181.041 64.5493 180.933 64.738C180.825 64.9268 180.771 65.1424 180.771 65.3851L180.397 65.1728C180.397 64.8088 180.478 64.4853 180.64 64.2022C180.801 63.9191 181.027 63.6967 181.317 63.5349C181.607 63.3664 181.934 63.2822 182.298 63.2822C182.662 63.2822 182.982 63.3631 183.258 63.5248C183.541 63.6866 183.764 63.9124 183.925 64.2022C184.087 64.492 184.168 64.8257 184.168 65.2031V68.1855H183.258ZM179.861 68.1855V60.967H180.771V68.1855H179.861ZM187.594 68.2866C187.122 68.2866 186.697 68.1754 186.32 67.953C185.942 67.7306 185.643 67.4307 185.42 67.0532C185.198 66.669 185.087 66.2411 185.087 65.7693C185.087 65.3042 185.198 64.8863 185.42 64.5156C185.643 64.1382 185.942 63.8382 186.32 63.6158C186.697 63.3934 187.122 63.2822 187.594 63.2822C188.059 63.2822 188.48 63.3934 188.858 63.6158C189.242 63.8315 189.545 64.1281 189.767 64.5055C189.99 64.8829 190.101 65.3042 190.101 65.7693C190.101 66.2411 189.99 66.669 189.767 67.0532C189.545 67.4307 189.242 67.7306 188.858 67.953C188.48 68.1754 188.059 68.2866 187.594 68.2866ZM187.594 67.4071C187.897 67.4071 188.167 67.3363 188.403 67.1948C188.638 67.0532 188.824 66.8611 188.959 66.6185C189.093 66.3691 189.161 66.086 189.161 65.7693C189.161 65.4592 189.09 65.1829 188.949 64.9402C188.814 64.6976 188.628 64.5089 188.392 64.3741C188.163 64.2325 187.897 64.1618 187.594 64.1618C187.29 64.1618 187.021 64.2325 186.785 64.3741C186.549 64.5089 186.364 64.6976 186.229 64.9402C186.094 65.1829 186.027 65.4592 186.027 65.7693C186.027 66.086 186.094 66.3691 186.229 66.6185C186.364 66.8611 186.549 67.0532 186.785 67.1948C187.021 67.3363 187.29 67.4071 187.594 67.4071ZM191.716 68.1855V61.3714H192.626V68.1855H191.716ZM190.533 64.2123V63.3833H193.809V64.2123H190.533ZM196.746 68.2866C196.274 68.2866 195.85 68.1754 195.472 67.953C195.095 67.7306 194.795 67.4307 194.572 67.0532C194.35 66.669 194.239 66.2411 194.239 65.7693C194.239 65.3042 194.35 64.8863 194.572 64.5156C194.795 64.1382 195.095 63.8382 195.472 63.6158C195.85 63.3934 196.274 63.2822 196.746 63.2822C197.211 63.2822 197.632 63.3934 198.01 63.6158C198.394 63.8315 198.697 64.1281 198.92 64.5055C199.142 64.8829 199.253 65.3042 199.253 65.7693C199.253 66.2411 199.142 66.669 198.92 67.0532C198.697 67.4307 198.394 67.7306 198.01 67.953C197.632 68.1754 197.211 68.2866 196.746 68.2866ZM196.746 67.4071C197.049 67.4071 197.319 67.3363 197.555 67.1948C197.791 67.0532 197.976 66.8611 198.111 66.6185C198.246 66.3691 198.313 66.086 198.313 65.7693C198.313 65.4592 198.242 65.1829 198.101 64.9402C197.966 64.6976 197.781 64.5089 197.545 64.3741C197.316 64.2325 197.049 64.1618 196.746 64.1618C196.443 64.1618 196.173 64.2325 195.937 64.3741C195.701 64.5089 195.516 64.6976 195.381 64.9402C195.246 65.1829 195.179 65.4592 195.179 65.7693C195.179 66.086 195.246 66.3691 195.381 66.6185C195.516 66.8611 195.701 67.0532 195.937 67.1948C196.173 67.3363 196.443 67.4071 196.746 67.4071ZM200.89 68.2866C200.701 68.2866 200.543 68.2226 200.415 68.0946C200.293 67.9598 200.233 67.8014 200.233 67.6194C200.233 67.4307 200.293 67.2756 200.415 67.1543C200.543 67.0263 200.701 66.9622 200.89 66.9622C201.078 66.9622 201.233 67.0263 201.355 67.1543C201.483 67.2756 201.547 67.4307 201.547 67.6194C201.547 67.8014 201.483 67.9598 201.355 68.0946C201.233 68.2226 201.078 68.2866 200.89 68.2866Z"
                  fill="#1D1D1B"
                />
              </svg>
            </Link>
          </div>
          <div className="wrapper-search-bar-home">
            <Search setSearchParams={setSearchParams} />
          </div>
          <div className="wrapper-sign-home">
            <span className="link-to link-to-folders">
              <Link to={`/users/${user.id}/folders`}>{t("folders")}</Link>
            </span>
            <span className="link-to link-to-groups">
              <Link to={`/users/${user.id}/groups`}>{t("groups")}</Link>
            </span>
            <h6>
              {user.first_name} {user.last_name}
            </h6>
            <span className="icon-user-home">
              <Link to={`/users/${user.id}`}>
                <img
                  className="icong"
                  src={
                    user?.avatar?.name
                      ? `https://smi-laravel.fly.dev/images/avatars/${user?.avatar?.name}`
                      : defaultAvatar
                  }
                  title="Profilo"
                  alt="company logo"
                />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
