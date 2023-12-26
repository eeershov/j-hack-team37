import { MonsterIconProps, DEFAULT_MONSTER_ICON_PROPS } from "../../interfaces/MonsterIcon";


export const Monster5Icon = ({
  height = DEFAULT_MONSTER_ICON_PROPS.height,
  width = DEFAULT_MONSTER_ICON_PROPS.width,
  color = DEFAULT_MONSTER_ICON_PROPS.color,
  secondaryColor = DEFAULT_MONSTER_ICON_PROPS.secondaryColor,
  ...props
}: MonsterIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 150 150" fill="none" {...props}>
    <g clipPath="url(#clip0_26_2199)">
      <path d="M142.201 36.6323C139.723 40.9945 136.44 44.8452 132.527 47.9818L124.626 40.5071C124.451 40.3571 124.277 40.2072 124.127 40.0573C122.588 38.4324 122.312 35.9847 123.452 34.0576C131.151 21.1839 139.776 15.5343 146.924 13.1587H146.95C148.275 21.3006 146.587 29.6462 142.201 36.6323Z" fill={color} />
      <path d="M123.452 34.0576C122.61 36.0373 122.866 38.3145 124.127 40.0573L118.594 36.6106L108.845 25.6113C109.657 23.3661 110.67 21.1999 111.87 19.1367C119.47 5.98713 132.419 -0.762138 140.793 4.08754C144.034 6.10157 146.262 9.40182 146.918 13.1621C139.776 15.5343 131.151 21.1839 123.452 34.0576Z" fill={color} />
      <path d="M34.2333 33.4076L22.5085 42.9823C19.9211 41.6148 17.4826 39.9818 15.234 38.1074C5.9603 30.3832 1.26053 20.0338 2.80995 12.384C14.3975 13.8659 24.8567 20.0716 31.7078 29.5329C32.6255 30.7745 33.4678 32.0676 34.2333 33.4076Z" fill={color} />
      <path d="M47.2319 22.7585L34.2334 33.4076C33.4679 32.0676 32.6256 30.7745 31.7079 29.5329C24.8568 20.0716 14.3976 13.8659 2.81006 12.384C3.18082 10.4272 4.04022 8.59508 5.31042 7.05939C11.4841 -0.365034 25.9587 1.48535 37.6332 11.2099C41.5446 14.4071 44.8036 18.3288 47.2319 22.7585Z" fill={color} />
      <path d="M147.5 85.6292C147.5 119.802 115.053 147.5 75.0043 147.5C74.1553 147.5 73.3302 147.5 72.5051 147.451C72.0806 147.451 71.6801 147.425 71.2555 147.4C32.933 145.725 2.50977 118.727 2.50977 85.6292C2.73634 69.2 10.0223 53.6623 22.5081 42.9823C24.5473 41.1387 26.7009 39.4268 28.9576 37.8579L56.9559 25.7086C61.6569 24.6649 66.4425 24.0459 71.2555 23.8582C71.6549 23.809 72.0806 23.809 72.5051 23.7838C73.3302 23.7586 74.1553 23.7586 75.0043 23.7586C81.0739 23.7518 87.1263 24.4063 93.0539 25.7086L117.702 34.4833L124.626 40.5071C127.455 42.7831 130.097 45.2835 132.526 47.9818C142.039 58.2236 147.381 71.6512 147.5 85.6292Z" fill={color} />
      <path d="M140 85.6292C140 118.727 109.578 145.725 71.2555 147.4C32.933 145.725 2.50977 118.727 2.50977 85.6292C2.73634 69.2 10.0223 53.6623 22.5081 42.9823C24.5473 41.1387 26.7009 39.4268 28.9576 37.8579L56.9559 25.7086C61.6569 24.6649 66.4425 24.0459 71.2555 23.8582C76.0674 24.047 80.853 24.6661 85.5539 25.7086L117.127 40.5071C119.956 42.7831 122.597 45.2835 125.027 47.9818C134.54 58.2236 139.881 71.6512 140 85.6292Z" fill={color} />
      <path d="M75.0047 72.5049C75.0196 80.8265 70.8737 88.6033 63.9562 93.2287C62.5921 94.1625 61.1343 94.9498 59.6066 95.5792L58.9566 95.3537H58.9314C55.1792 90.6643 50.1922 87.1146 44.5323 85.104C39.099 83.011 33.2114 82.3816 27.4589 83.2799C25.8385 79.919 25.0008 76.2354 25.0088 72.5049C25.01 65.3036 28.1169 58.4525 33.533 53.7069C33.5582 53.6818 33.5582 53.6818 33.5833 53.6818C40.9631 47.23 51.4349 45.6909 60.3596 49.7464C69.2842 53.8019 75.0116 62.7025 75.0047 72.5049Z" fill="#F5F5F5" />
      <path d="M125.002 72.5049C125.01 76.2354 124.172 79.919 122.552 83.2799C122.077 83.2044 121.627 83.13 121.152 83.0796C115.84 82.4995 110.468 83.1929 105.478 85.104C100.367 86.9418 95.7881 90.0166 92.1537 94.0538C91.7795 94.4783 91.4293 94.904 91.0791 95.3537H91.054L90.6546 95.5037L90.404 95.5792C78.8245 90.7627 72.605 78.1121 75.8641 66.0016C79.1232 53.89 90.8503 46.0685 103.283 47.7152C115.717 49.3608 125.006 59.9641 125.002 72.5049Z" fill="#F5F5F5" />
      <path d="M62.5064 72.5049C62.5064 79.4086 56.9106 85.0044 50.0069 85.0044C43.1043 85.0044 37.5073 79.4086 37.5073 72.5049C37.5073 65.6023 43.1043 60.0065 50.0069 60.0065C56.9106 60.0065 62.5064 65.6023 62.5064 72.5049Z" fill={color} />
      <path d="M112.502 72.5049C112.502 79.4086 106.906 85.0044 100.003 85.0044C93.0997 85.0044 87.5039 79.4086 87.5039 72.5049C87.5039 65.6023 93.0997 60.0065 100.003 60.0065C106.906 60.0065 112.502 65.6023 112.502 72.5049Z" fill={color} />
      <path d="M59.506 29.1862L56.5067 25.1055C54.6013 22.4919 51.2267 21.4059 48.1542 22.4209C36.1181 26.0564 27.2335 36.273 25.3042 48.6971C25.1794 49.2795 25.4838 49.8689 26.0297 50.1046C26.5767 50.3415 27.2141 50.1584 27.5539 49.6697C32.0534 43.4194 42.0526 32.6707 57.4416 33.1502C58.3879 33.165 59.2611 32.6444 59.6982 31.8056C60.1353 30.9668 60.061 29.9518 59.506 29.1862Z" fill={color} />
      <path d="M90.5047 29.1862L93.504 25.1055C95.4093 22.4919 98.7839 21.4059 101.855 22.4209C113.893 26.0564 122.777 36.273 124.706 48.6971C124.831 49.2795 124.527 49.8689 123.98 50.1046C123.434 50.3415 122.797 50.1584 122.457 49.6697C117.957 43.4194 107.958 32.6707 92.569 33.1502C91.6227 33.165 90.7496 32.6444 90.3124 31.8056C89.8753 30.9668 89.9497 29.9518 90.5047 29.1862Z" fill={color} />
      <path d="M89.3784 134.951C84.7816 136.665 79.9114 137.529 75.0045 137.501C70.3939 137.519 65.8132 136.758 61.4556 135.251C62.4981 134.284 63.3391 133.119 63.9308 131.826C65.5054 128.426 65.2811 124.977 63.4055 124.102C63.0439 123.917 62.6308 123.856 62.2303 123.927C70.0072 118.658 80.2192 118.697 87.9537 124.027C87.8759 124.04 87.8004 124.066 87.7294 124.102C85.8539 124.977 85.6044 128.426 87.2042 131.826C87.7294 132.993 88.4664 134.053 89.3784 134.951Z" fill={color} />
      <path d="M107.503 112.978C107.503 113.402 107.479 113.828 107.453 114.352V114.478C107.428 114.803 107.378 115.077 107.353 115.402C107.357 115.438 107.348 115.473 107.328 115.502C107.033 117.745 106.33 119.913 105.253 121.902C103.608 124.982 101.335 127.682 98.5791 129.827C97.4485 130.736 96.2538 131.563 95.0042 132.301C93.2076 133.343 91.3263 134.23 89.3787 134.951C88.4666 134.053 87.7297 132.993 87.2044 131.826C85.6047 128.426 85.8541 124.977 87.7297 124.102C87.8006 124.066 87.8762 124.04 87.954 124.027C80.2194 118.697 70.0074 118.658 62.2305 123.927C62.6311 123.856 63.0442 123.917 63.4058 124.102C65.2813 124.977 65.5056 128.426 63.931 131.826C63.3394 133.119 62.4983 134.284 61.4558 135.251C59.6032 134.616 57.8066 133.83 56.082 132.902C54.417 131.98 52.8287 130.926 51.3319 129.751C48.6233 127.625 46.385 124.961 44.7577 121.927C43.8308 120.157 43.1648 118.263 42.7826 116.302C42.7323 116.002 42.7071 115.702 42.6579 115.402C42.6075 115.103 42.5824 114.803 42.5572 114.478V114.303C42.532 113.828 42.5068 113.402 42.5068 112.978C42.5068 112.553 42.532 112.127 42.5572 111.602V111.503C42.5824 111.178 42.6327 110.903 42.6579 110.553C42.9543 104.609 46.2248 99.2147 51.3571 96.204C52.8722 95.4201 54.5509 95.0093 56.256 95.0036C60.0117 95.1157 63.5065 96.9501 65.7311 99.978C66.5 101.022 67.1226 102.166 67.5803 103.378C68.2909 105.642 69.3906 107.766 70.8302 109.652C71.915 110.79 73.4347 111.409 75.0047 111.353C76.8288 111.412 78.559 110.547 79.6049 109.053C80.8134 107.206 81.7872 105.216 82.5047 103.128C82.9441 101.999 83.5414 100.938 84.2795 99.978C86.5041 96.9501 89.9989 95.1157 93.7535 95.0036C95.4665 95.0184 97.1521 95.4293 98.6787 96.204C103.796 99.2262 107.055 104.616 107.353 110.553C107.378 110.903 107.428 111.178 107.453 111.503V111.678C107.479 112.127 107.503 112.553 107.503 112.978Z" fill={color} />
      <path d="M70.8304 109.652C70.2342 110.124 69.5991 110.541 68.9308 110.903C65.6305 112.653 62.1563 112.577 61.1814 110.753C60.2064 108.928 62.106 106.028 65.4314 104.278C66.1111 103.898 66.8332 103.596 67.5805 103.378C68.2911 105.642 69.3908 107.766 70.8304 109.652Z" fill={color} />
      <path d="M48.9324 121.227C47.6038 121.744 46.1825 121.982 44.7578 121.927C43.8309 120.157 43.1649 118.263 42.7827 116.302C43.8023 115.382 44.9901 114.669 46.2821 114.202C49.7814 112.878 53.2316 113.377 53.9571 115.327C54.6815 117.277 52.4317 119.902 48.9324 121.227Z" fill={color} />
      <path d="M63.931 131.826C63.3394 133.119 62.4983 134.284 61.4558 135.251C59.6031 134.616 57.8065 133.83 56.082 132.902C56.1438 131.429 56.5009 129.984 57.1314 128.652C57.9542 126.337 59.8595 124.571 62.2305 123.927C62.631 123.856 63.0441 123.917 63.4058 124.102C65.2813 124.977 65.5056 128.426 63.931 131.826Z" fill={color} />
      <path d="M89.9291 110.753C88.9542 112.577 85.48 112.653 82.1797 110.903C81.2391 110.41 80.3717 109.787 79.605 109.053C80.8134 107.206 81.7872 105.216 82.5047 103.128C83.6285 103.329 84.711 103.717 85.7043 104.278C89.0045 106.028 90.9041 108.928 89.9291 110.753Z" fill={color} />
      <path d="M107.328 115.502C107.034 117.745 106.33 119.913 105.253 121.902C104.208 121.835 103.179 121.607 102.203 121.227C98.704 119.902 96.4291 117.252 97.1786 115.327C97.9293 113.402 101.329 112.878 104.828 114.202C105.715 114.524 106.555 114.961 107.328 115.502Z" fill={color} />
      <path d="M95.004 132.301C93.2074 133.343 91.3261 134.23 89.3785 134.951C88.4664 134.053 87.7295 132.993 87.2042 131.826C85.6045 128.426 85.8539 124.977 87.7295 124.102C87.8004 124.066 87.876 124.04 87.9538 124.027C89.8042 123.352 92.4533 125.376 94.0039 128.652C94.5543 129.798 94.893 131.034 95.004 132.301Z" fill={color} />
      <path d="M47.5076 67.5053C47.5076 70.2666 45.2682 72.5049 42.5069 72.5049C39.7468 72.5049 37.5073 70.2666 37.5073 67.5053C37.5073 64.744 39.7468 62.5057 42.5069 62.5057C45.2682 62.5057 47.5076 64.744 47.5076 67.5053Z" fill="#F5F5F5" />
      <path d="M97.5031 67.5053C97.5031 70.2666 95.2648 72.5049 92.5035 72.5049C89.7422 72.5049 87.5039 70.2666 87.5039 67.5053C87.5039 64.744 89.7422 62.5057 92.5035 62.5057C95.2648 62.5057 97.5031 64.744 97.5031 67.5053Z" fill="#F5F5F5" />
      <path d="M55.006 72.5049C55.006 75.2661 52.7677 77.5045 50.0064 77.5045C47.2451 77.5045 45.0068 75.2661 45.0068 72.5049C45.0068 69.7436 47.2451 67.5053 50.0064 67.5053C52.7677 67.5053 55.006 69.7436 55.006 72.5049Z" fill={secondaryColor} />
      <path d="M105.003 72.5049C105.003 75.2661 102.765 77.5045 100.003 77.5045C97.2422 77.5045 95.0039 75.2661 95.0039 72.5049C95.0039 69.7436 97.2422 67.5053 100.003 67.5053C102.765 67.5053 105.003 69.7436 105.003 72.5049Z" fill={secondaryColor} />
      <path d="M2.50977 85.6292C2.50977 118.727 32.933 145.725 71.2555 147.4C71.6801 147.425 72.0806 147.451 72.5051 147.451C73.3302 147.5 74.1553 147.5 75.0043 147.5C76.3226 147.5 77.6294 147.465 78.9294 147.407C78.8722 147.407 78.815 147.407 78.7543 147.407C40.4318 145.725 10.0097 118.727 10.0097 85.6292C10.2363 69.2001 17.5223 53.6623 30.0081 42.9823C27.4196 41.6148 24.9822 39.9818 22.7335 38.1074C13.4587 30.3832 8.75896 20.0338 10.3095 12.384C10.6792 10.4272 11.5397 8.59509 12.8088 7.05939C14.7427 4.82795 17.3952 3.3426 20.3087 2.8597C14.0893 1.8401 8.54383 3.15722 5.30995 7.05939C4.03974 8.59509 3.18034 10.4272 2.80958 12.384C1.26015 20.0338 5.95993 30.3832 15.2336 38.1074C17.4822 39.9818 19.9208 41.6148 22.5081 42.9823C10.0223 53.6623 2.73634 69.2001 2.50977 85.6292Z" fill={color} />
      <path d="M36.4453 37.8671L36.5907 37.6176L34.5034 39.3227C35.1477 38.8272 35.7805 38.3271 36.4453 37.8671Z" fill={color} />
      <path d="M5.00935 85.6292C5.1318 96.0381 8.29473 106.185 14.1091 114.82C17.399 119.678 21.3435 124.059 25.8305 127.839C30.3861 131.58 35.3673 134.769 40.6725 137.338C51.4246 142.356 63.1403 144.971 75.0047 145.001V150C62.3907 149.969 49.9358 147.186 38.5074 141.846C32.8258 139.095 27.4909 135.68 22.6138 131.671C17.7618 127.586 13.4992 122.85 9.94714 117.595C3.5858 108.138 0.132209 97.0256 0.00976562 85.6292H5.00935Z" fill={color} />
      <path d="M1.07236 96.0266C1.16391 96.6892 1.53009 97.282 2.08052 97.663C2.6298 98.0429 3.31525 98.1745 3.96752 98.0258C5.29151 97.7145 6.1635 96.45 5.98383 95.1009C5.40023 91.9757 5.07409 88.8082 5.00886 85.6292C5.20912 70.2826 11.8863 55.7347 23.3937 45.5776C23.1854 46.4622 22.9886 47.3547 22.8353 48.2965C22.6556 49.3894 22.9646 50.5051 23.6809 51.3485C24.3961 52.193 25.4466 52.6805 26.5532 52.6816C27.7513 52.6805 28.8751 52.1026 29.5731 51.1287C33.8678 45.1542 43.2547 35.218 57.3506 35.6482C59.2685 35.7329 61.0594 34.6904 61.9302 32.9808C62.8274 31.2906 62.6695 29.2365 61.5251 27.7031L61.3157 27.4159C70.3788 25.8974 79.6308 25.8974 88.6939 27.4159L88.4833 27.7008C87.3481 29.2377 87.1902 31.2895 88.0805 32.9819C88.9697 34.6744 90.7479 35.7089 92.659 35.6448C106.788 35.2225 116.14 45.145 120.436 51.1265C121.446 52.5328 123.29 53.0581 124.889 52.3944C126.513 51.7272 127.46 50.0268 127.173 48.2942C127.021 47.3467 126.821 46.4473 126.611 45.557C128.034 46.8798 129.401 48.2416 130.668 49.6537C139.795 59.4194 144.911 72.2634 145 85.6292C145 118.367 113.599 145.001 75.0042 145.001C63.1398 144.97 51.423 142.355 40.672 137.336C35.3668 134.766 30.3856 131.578 25.83 127.837C21.3431 124.057 17.3985 119.677 14.1086 114.82C13.6223 114.186 13.1908 113.512 12.8189 112.805C12.1014 111.625 10.5623 111.251 9.3825 111.968C8.20269 112.687 7.8285 114.225 8.54714 115.405C8.95452 116.173 9.4237 116.905 9.95123 117.595C13.5032 122.85 17.7659 127.586 22.6178 131.671C27.495 135.68 32.8299 139.095 38.5126 141.846C49.9388 147.186 62.3925 149.969 75.0042 150C116.357 150 149.999 121.124 149.999 85.6292C149.925 71.9041 144.962 58.6539 136.001 48.2565C139.311 45.2526 142.133 41.7509 144.364 37.8774C149.21 29.4986 151.087 20.0464 149.387 12.5968C149.359 12.4835 149.325 12.3714 149.285 12.2615C148.43 7.9531 145.806 4.20198 142.053 1.92247C137.25 -0.869704 131.143 -0.612229 124.894 2.64225C118.508 6.20685 113.249 11.4902 109.712 17.8916C108.936 19.2545 108.231 20.6563 107.603 22.0936C105.998 21.3132 104.347 20.6346 102.658 20.0613C98.8601 18.7911 94.6707 19.9411 92.0536 22.9713C80.798 20.7353 69.2116 20.7353 57.956 22.9713C55.586 20.2295 51.9013 19.0108 48.3642 19.7992C45.9142 15.8238 42.829 12.2764 39.2324 9.29998C33.7053 4.51095 26.948 1.36632 19.7261 0.223133C12.7262 -0.667157 6.93935 1.18781 3.39192 5.45502C1.85394 7.30769 0.81031 9.52083 0.359443 11.8873C0.359443 11.9365 0.346855 11.9869 0.337701 12.0372V12.0693C-1.3273 20.7868 3.99155 31.9932 13.6417 40.0322C15.1499 41.2658 16.736 42.3998 18.3907 43.4274C6.79631 54.421 0.162618 69.6521 0.00927734 85.6292C0.0756487 89.1183 0.430392 92.5959 1.07236 96.0266ZM140.035 35.3827C138.068 38.8009 135.582 41.8917 132.664 44.5443C130.629 42.4124 128.464 40.4086 126.181 38.5445C125.211 37.7721 124.961 36.4012 125.596 35.3347C131.096 26.1583 137.596 19.8965 144.935 16.6294C145.171 23.2254 143.467 29.7446 140.035 35.3827ZM114.037 20.384C117.1 14.8076 121.659 10.1994 127.201 7.07768C131.881 4.64026 136.266 4.34502 139.553 6.25262C141.588 7.49422 143.121 9.41326 143.883 11.6722C135.169 15.2391 127.574 22.2962 121.306 32.7725C121.219 32.9224 121.164 33.0803 121.086 33.2348C118.608 29.8167 115.519 26.8838 111.978 24.5837C112.578 23.143 113.268 21.74 114.042 20.384H114.037ZM101.038 24.7908C110.29 27.6333 117.658 34.6755 120.914 43.7901C114.131 35.7043 104.2 30.9233 93.6488 30.6658C93.2632 30.6658 92.873 30.6658 92.4839 30.6853V30.6704L95.4832 26.5931C96.7408 24.832 99.002 24.1008 101.053 24.7908H101.038ZM50.5064 24.5356C52.0901 24.5459 53.5743 25.3069 54.5058 26.5885L57.5062 30.6475C46.5527 30.58 36.1393 35.3965 29.0982 43.7867C32.3538 34.6733 39.7222 27.6299 48.9741 24.7885C49.4673 24.6203 49.9857 24.5356 50.5064 24.5356ZM19.091 5.18267C25.3688 6.19998 31.237 8.95324 36.0328 13.1312C38.9532 15.5446 41.4982 18.3791 43.582 21.5432C39.9568 23.1533 36.605 25.316 33.6446 27.956C27.0006 18.8563 17.1731 12.5911 6.11887 10.41C6.41983 9.78403 6.79288 9.19699 7.2323 8.65915C9.65142 5.75941 13.8637 4.5098 19.091 5.18267ZM5.03175 15.2917C14.9623 17.2348 23.7874 22.8695 29.7276 31.0606C29.8763 31.2551 29.9965 31.4691 30.0823 31.698C28.9357 33.1101 27.9092 34.6149 27.0132 36.1975C25.4031 37.3373 23.816 38.5949 22.2631 39.9326C20.3566 38.834 18.544 37.5799 16.8435 36.1826C9.54385 30.1154 4.98712 21.8865 5.03175 15.2917Z" fill={secondaryColor} />
      <path d="M8.58197 104.253C8.3016 103.682 7.84731 103.214 7.28429 102.915L6.84716 102.753C6.68466 102.709 6.51645 102.688 6.34709 102.688C6.1926 102.666 6.03468 102.666 5.8802 102.688C5.71541 102.715 5.55178 102.753 5.39271 102.801C4.75761 103.025 4.23236 103.485 3.92797 104.086C3.77692 104.392 3.70254 104.729 3.71055 105.07C3.74602 106.11 4.3651 107.041 5.31032 107.476C5.9294 107.709 6.61486 107.699 7.22708 107.446C7.82556 107.168 8.30389 106.684 8.5751 106.083C8.81198 105.497 8.81541 104.841 8.58197 104.253Z" fill={secondaryColor} />
      <path d="M50.0068 65.0061C45.8655 65.0061 42.5068 68.3635 42.5068 72.5049C42.5068 76.6474 45.8655 80.0048 50.0068 80.0048C54.1493 80.0048 57.5067 76.6474 57.5067 72.5049C57.5067 68.3635 54.1493 65.0061 50.0068 65.0061ZM50.0068 75.0052C48.6267 75.0052 47.5076 73.8861 47.5076 72.5049C47.5076 71.1248 48.6267 70.0057 50.0068 70.0057C51.388 70.0057 52.5072 71.1248 52.5072 72.5049C52.5072 73.8861 51.388 75.0052 50.0068 75.0052Z" fill={secondaryColor} />
      <path d="M100.004 65.0061C95.8614 65.0061 92.5039 68.3635 92.5039 72.5049C92.5039 76.6474 95.8614 80.0048 100.004 80.0048C104.145 80.0048 107.503 76.6474 107.503 72.5049C107.503 68.3635 104.145 65.0061 100.004 65.0061ZM100.004 75.0052C98.6226 75.0052 97.5035 73.8861 97.5035 72.5049C97.5035 71.1248 98.6226 70.0057 100.004 70.0057C101.384 70.0057 102.503 71.1248 102.503 72.5049C102.503 73.8861 101.384 75.0052 100.004 75.0052Z" fill={secondaryColor} />
      <path d="M122.125 85.7539H122.279C122.446 85.7654 122.613 85.7597 122.779 85.7368C122.934 85.731 123.087 85.7093 123.237 85.6715C123.382 85.6223 123.523 85.5605 123.657 85.4839C123.807 85.4164 123.95 85.3328 124.081 85.2344C124.191 85.1406 124.291 85.0364 124.381 84.9243C124.505 84.7938 124.613 84.6508 124.706 84.4975C124.731 84.454 124.771 84.4265 124.794 84.3819C129.098 75.4664 128.274 64.9237 122.636 56.7852C116.998 48.6467 107.418 44.17 97.558 45.0672C87.6984 45.9632 79.0828 52.0945 75.0044 61.1165C70.9351 52.0842 62.3206 45.9415 52.4553 45.0386C42.59 44.1357 33.0028 48.6112 27.3613 56.7543C21.7197 64.8962 20.8969 75.4458 25.2088 84.3647C25.2305 84.4116 25.2728 84.4391 25.298 84.4814C25.3884 84.6313 25.4937 84.7698 25.6127 84.8968C25.7077 85.0147 25.8118 85.1234 25.9251 85.2218C26.0544 85.3134 26.1917 85.3923 26.3359 85.4598C26.4733 85.5376 26.6186 85.6017 26.7685 85.6521C26.9184 85.6887 27.0717 85.7104 27.2251 85.7173C27.391 85.7402 27.5592 85.7459 27.7252 85.7322C27.7801 85.7322 27.8304 85.7471 27.8831 85.7322C33.2008 84.922 38.6375 85.5113 43.66 87.4395C47.0941 88.7017 50.2868 90.5441 53.0984 92.8865C52.1097 93.1337 51.1508 93.4919 50.241 93.9542C44.3168 97.3597 40.5234 103.536 40.1618 110.36L40.0622 111.295L40.0473 111.673C40.0244 112.153 40.005 112.56 40.005 112.967C40.005 113.412 40.0267 113.855 40.0542 114.292V114.664C40.0702 114.865 40.0942 115.05 40.1148 115.238L40.3174 116.764C40.7442 118.964 41.4903 121.087 42.5294 123.072C44.3168 126.418 46.7817 129.354 49.7661 131.694C53.0137 134.274 56.6848 136.27 60.6155 137.593H60.6304C70.2439 140.878 80.6928 140.763 90.2308 137.268C92.3078 136.495 94.315 135.547 96.2306 134.434C97.5832 133.635 98.8763 132.74 100.101 131.756C103.125 129.401 105.619 126.435 107.42 123.052C107.732 122.466 108.013 121.877 108.266 121.282C108.34 121.111 108.393 120.936 108.462 120.765C108.631 120.343 108.8 119.917 108.937 119.492C109.01 119.265 109.063 119.037 109.127 118.813C109.235 118.435 109.35 118.062 109.435 117.682C109.492 117.432 109.525 117.182 109.572 116.932C109.633 116.602 109.707 116.272 109.75 115.932C109.776 115.816 109.794 115.697 109.805 115.578L109.845 115.225C109.865 115.037 109.89 114.852 109.905 114.653C109.905 114.628 109.918 114.27 109.92 114.248C109.942 113.767 109.963 113.362 109.963 112.955C109.963 112.488 109.937 112.02 109.912 111.655C109.912 111.59 109.912 111.35 109.912 111.283L109.807 110.283C109.433 103.484 105.648 97.3346 99.7483 93.9359C98.8145 93.4885 97.8349 93.1452 96.8256 92.914C99.651 90.5464 102.865 88.6857 106.325 87.4144C111.358 85.4976 116.803 84.9254 122.125 85.7539ZM29.0251 80.5449C24.6355 69.192 30.0699 56.4064 41.2912 51.6895C52.5125 46.9725 65.4492 52.035 70.4888 63.1145C75.5285 74.195 70.8424 87.2736 59.9129 92.6314C55.9833 88.1799 50.9974 84.7858 45.4142 82.7615C40.1961 80.7669 34.5866 80.0082 29.0251 80.5449ZM83.937 106.213C84.1338 106.303 84.3341 106.376 84.5321 106.486C85.887 107.143 87.0176 108.186 87.782 109.485C86.252 109.857 84.6374 109.569 83.3294 108.693C83.1818 108.615 83.049 108.516 82.9071 108.43C83.2939 107.703 83.6269 106.961 83.937 106.213ZM82.3544 98.3839C81.463 99.5294 80.7398 100.796 80.2065 102.145C80.0143 102.59 79.8323 103.044 79.6469 103.496C79.1468 104.934 78.458 106.3 77.5997 107.558C77.0275 108.421 76.0388 108.914 75.0044 108.852C74.1187 108.906 73.2547 108.567 72.6402 107.928C71.6377 106.62 70.8665 105.149 70.3607 103.58L69.8926 102.426C69.3411 100.999 68.5984 99.653 67.6852 98.4263C66.8579 97.3884 65.9149 96.4489 64.8736 95.6261C69.301 92.7973 72.8187 88.7498 75.0044 83.9722C77.1969 88.7612 80.7283 92.8145 85.1718 95.6432C84.1281 96.442 83.1818 97.362 82.3544 98.3839ZM66.2399 106.72C66.5489 107.464 66.8956 108.191 67.2801 108.898C66.1129 109.537 64.766 109.768 63.4535 109.555C64.0382 108.325 65.0201 107.326 66.2399 106.72ZM48.0542 118.887C47.5026 119.092 46.9328 119.244 46.3514 119.34C46.2713 119.15 46.1764 118.962 46.102 118.772C45.9898 118.477 45.8846 118.182 45.7896 117.882C45.7243 117.682 45.682 117.485 45.6248 117.285C46.1146 116.99 46.6295 116.739 47.1639 116.534C48.56 115.941 50.1014 115.781 51.589 116.078C50.8498 117.462 49.5704 118.478 48.0542 118.887ZM62.0528 126.421C62.1364 126.427 62.2199 126.427 62.3034 126.421C62.6685 127.897 62.4442 129.458 61.6786 130.771C61.4234 131.31 61.119 131.822 60.7689 132.304C60.5629 132.221 60.3558 132.149 60.1532 132.054C59.8889 131.944 59.6257 131.828 59.3636 131.711C59.176 131.623 58.9929 131.528 58.8063 131.439C58.9517 130.837 59.1542 130.251 59.4106 129.689C59.9656 128.375 60.8787 127.242 62.046 126.421H62.0528ZM65.6735 133.883C65.8554 133.561 66.0351 133.236 66.1976 132.896V132.876C67.6246 130.22 67.8363 127.078 66.7778 124.254C72.3369 121.784 78.7109 121.932 84.1487 124.657C84.1316 124.701 84.1041 124.741 84.0869 124.792C83.3271 127.501 83.6338 130.399 84.9417 132.891C85.0665 133.159 85.2313 133.376 85.3686 133.641C78.926 135.377 72.1504 135.463 65.6655 133.891L65.6735 133.883ZM91.6235 131.251C91.3466 131.386 91.0662 131.516 90.7813 131.646C90.5661 131.743 90.3361 131.832 90.1141 131.927C89.8715 131.551 89.6553 131.16 89.4664 130.756C88.7547 129.416 88.4835 127.887 88.6894 126.385C89.1266 126.385 90.6291 127.347 91.7311 129.692C91.9187 130.097 92.0801 130.514 92.2117 130.941C92.0034 131.049 91.826 131.156 91.6235 131.251ZM104.332 117.479C104.237 117.802 104.136 118.122 104.018 118.444C103.94 118.665 103.828 118.882 103.737 119.102C103.523 119.037 103.306 118.967 103.087 118.885C101.646 118.409 100.381 117.506 99.4633 116.295C99.9417 116.026 100.491 115.909 101.038 115.96C102.033 115.977 103.019 116.173 103.946 116.538C104.136 116.611 104.318 116.685 104.493 116.762C104.435 117.002 104.4 117.252 104.332 117.485V117.479ZM104.858 110.73C104.875 110.958 104.898 111.16 104.923 111.357L104.953 111.5V111.642C102.571 110.761 99.952 110.761 97.5706 111.642C96.3176 112.149 95.33 113.155 94.8471 114.417C94.363 115.68 94.426 117.088 95.021 118.302C96.3565 120.775 98.5856 122.645 101.253 123.529C100.033 125.15 98.6142 126.61 97.0282 127.874C96.8588 128.01 96.6883 128.124 96.5281 128.254C96.4354 128.029 96.3862 127.814 96.2786 127.586C95.1904 124.972 93.1432 122.874 90.5558 121.721C89.9013 121.482 89.2067 121.37 88.5086 121.392C84.4806 118.813 79.7888 117.461 75.0044 117.502C70.1455 117.484 65.3863 118.885 61.3136 121.535C61.0595 121.584 60.8089 121.65 60.5629 121.732C57.9767 122.884 55.9341 124.991 54.8607 127.611C54.6707 128.024 54.506 128.441 54.3618 128.861C53.8617 128.514 53.3616 128.166 52.9039 127.807C51.4403 126.632 50.1197 125.289 48.9697 123.806C49.2489 123.719 49.5292 123.675 49.8096 123.57C54.7566 121.697 57.5407 117.775 56.2934 114.459C55.7956 113.189 54.8035 112.174 53.5436 111.65C50.8967 110.676 47.9764 110.754 45.3845 111.868C45.2517 111.918 45.1339 111.992 45.0149 112.045L45.0297 111.705L45.0664 111.365C45.0915 111.167 45.1144 110.965 45.1247 110.802C45.3685 105.718 48.1206 101.086 52.469 98.4388C53.6385 97.8289 54.9374 97.5074 56.2556 97.5039C59.2423 97.6184 62.0093 99.1037 63.7556 101.529C63.9021 101.717 64.0394 101.914 64.1653 102.118C59.5639 104.583 57.3187 108.773 58.9631 111.931C60.088 113.783 62.1592 114.846 64.3209 114.68C66.3441 114.631 68.326 114.093 70.0975 113.113C70.3206 112.992 70.5346 112.862 70.7555 112.72C72.0405 113.48 73.511 113.874 75.0044 113.858C76.7083 113.883 78.3744 113.356 79.7545 112.357C80.1573 112.635 80.575 112.892 81.0041 113.127C82.7721 114.108 84.7506 114.645 86.7715 114.692C88.9343 114.861 91.0079 113.797 92.1339 111.943C92.7541 110.738 92.8605 109.334 92.4257 108.05C91.4152 105.442 89.4481 103.317 86.926 102.109C86.6766 101.963 86.387 101.858 86.117 101.738C86.1616 101.681 86.1936 101.605 86.2394 101.548C88.7226 97.8484 93.5437 96.5312 97.5637 98.4537C101.871 101.094 104.6 105.687 104.858 110.732V110.73ZM90.0958 92.6291C79.1674 87.2702 74.4814 74.1916 79.521 63.1122C84.5607 52.0328 97.4974 46.9702 108.719 51.6872C119.94 56.4041 125.374 69.1897 120.985 80.5426C115.428 80.0094 109.823 80.7681 104.608 82.7592C99.0205 84.7824 94.03 88.1765 90.0958 92.6314V92.6291Z" fill={secondaryColor} />
    </g>
    <defs>
      <clipPath id="clip0_26_2199">
        <rect width="150" height="150" fill={color} />
      </clipPath>
    </defs>
  </svg>
);

export default Monster5Icon;
