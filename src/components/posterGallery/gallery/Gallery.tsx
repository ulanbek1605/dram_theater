import React from "react";
import "./gallery.css";
import Image from "next/image";
function Gallery() {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery_title">
          <h1>Галерея</h1>
        </div>
        <div className="gallery_image_block">
          <div className="img1">
            <Image
              src={"/img/gallery_img1.png"}
              width={438}
              height={584}
              alt="img"
            />
          </div>
          <div className="img2">
            <Image
              src={"/img/gallery_img2.png"}
              width={490}
              height={378}
              alt="img"
            />
          </div>
          <div className="img3">
            <Image
              src={"/img/gallery_img3.png"}
              width={410}
              height={590}
              alt="img"
            />
          </div>
          <div className="img4">
            <Image
              src={"/img/gallery_img5.png"}
              width={410}
              height={642}
              alt="img"
            />
          </div>
          <div className="img5">
            <Image
              src={"/img/gallery_img4.png"}
              width={410}
              height={642}
              alt="img"
            />
          </div>
          <div className="img6">
            <Image
              src={"/img/gallery_img6.png"}
              width={410}
              height={642}
              alt="img"
            />
          </div>
        </div>
        <div className="tunduk">
          <div className="circle"></div>
          <p>Подробнее</p>
          <svg
            width="250.000000"
            height="250.000000"
            viewBox="0 0 250 250"
            fill="yellow"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <path
              id="Vector"
              d="M123.879 1.05469C122.736 2.05469 122.727 2.10156 122.812 6.57031C122.859 9.04688 123.137 14.6328 123.428 18.9844C123.721 23.3359 123.959 33.7266 123.959 42.0859C123.959 55.8828 123.889 57.4609 123.197 59.2812C122.58 60.8984 122.268 61.25 121.557 61.1484C120.48 60.9922 119.6 58.8672 115.809 47.2891C111.703 34.7422 109.42 26.3281 106.66 13.5703C104.76 4.78906 104.605 4.34375 103.363 4.03125C101.861 3.64844 99.4961 4.92969 98.8652 6.46094C98.0332 8.5 98.1426 9 105.496 36.5859C109.568 51.8516 111.205 58.5391 111.609 61.5234C111.896 63.6641 111.879 63.7109 110.527 64.5469C108.434 65.8359 106.609 65.6641 105.158 64.0391C104.443 63.2422 100.443 54.9844 95.3281 43.75C87.6875 26.9688 85.1406 20.6406 83.4688 14.2734C82.5957 10.9609 80.8496 10.1172 78.25 11.7422C74.7852 13.9062 74.8574 16.7266 78.5371 22.9375C82.209 29.1328 86.3457 38.0312 92.5293 53.0156C96.084 61.625 97.9043 66.5547 97.9199 67.6016C97.9648 70.4531 95.4395 72.0547 93.0664 70.6875C91.8926 70.0078 91.168 69.0938 83.793 58.9453C68.7637 38.2656 67.1582 35.8438 63.4551 28.2969C62.0234 25.3828 60.4375 22.7031 59.9316 22.3438C58.5312 21.3516 56.4512 21.5156 55.2676 22.7109C53.3281 24.6719 53.9922 26.1016 61.8359 36.8281C78.2012 59.2109 87.5664 73.5625 87.5664 76.25C87.5664 78.9688 84.916 80.1953 82.2832 78.6953C80.9844 77.9609 54.0664 50.0547 46.2812 41.375C43.0684 37.7891 40.9961 37.0781 39.4844 39.0156C37.6172 41.4219 38.748 43.375 45.8281 49.9688C47.4121 51.4453 51.8359 55.9375 55.6621 59.9609C59.4883 63.9766 64.8535 69.6094 67.5879 72.4688C79.1641 84.5938 78.9316 84.3125 78.9316 85.9688C78.9316 89.2422 75.5 90.5234 71.4609 88.7578C70.4805 88.3281 59.7793 80.8047 47.6797 72.0391C32.1445 60.7812 25.2852 56.0391 24.3359 55.9141C22.7598 55.6953 21.8652 56.3281 21.0938 58.1953C20.1934 60.375 20.9375 61.2812 26.6699 65.0312C35.4395 70.7578 66.1895 92.5391 68.4902 94.6562C71.0547 97.0156 71.4395 97.9219 70.4922 99.3906C69.8301 100.414 69.6602 100.453 66.9453 100.258C64.4414 100.078 63.3594 99.6797 58.0566 97.0312C54.7344 95.3672 49.4219 92.9844 46.25 91.7344C29.9082 85.2891 24.6211 83.0938 20.4258 81C15.4238 78.5078 13.3691 78.1328 12.1543 79.4922C11.0605 80.7188 10.8555 82.9531 11.7637 83.7891C12.1797 84.1719 15.9434 85.9062 20.127 87.6484C24.3125 89.3984 31.3438 92.5938 35.7539 94.75C40.9355 97.2969 46.5352 99.6406 51.5859 101.391C64.0469 105.695 66.875 107.539 65.1445 110.219L64.4512 111.289L60.0742 111C54.6445 110.641 37.7031 109.18 35.7539 108.898C34.9629 108.789 31.7246 108.5 28.5566 108.266C20.5234 107.672 14.5312 106.734 9.67969 105.32C7.39648 104.656 5.21484 104.109 4.82812 104.109C2.76562 104.102 0.640625 106.516 1.11133 108.336C1.52539 109.945 3.01367 110.406 9.73047 111C18.8242 111.805 23.7051 112.375 29.1738 113.266C35.291 114.266 40.248 114.82 45.6523 115.117C50.5098 115.383 60.2461 116.742 62.3477 117.445L63.7168 117.906L63.7168 120.938C63.7168 123.625 63.5977 124.086 62.6777 125.016C60.1973 127.531 53.123 128.055 29.791 127.445C19.8398 127.188 9.63867 126.773 7.12305 126.531C2.06055 126.031 1.05469 126.266 0.369141 128.086C-0.228516 129.68 -0.101562 130.969 0.763672 132.047L1.54883 133.031L30.8848 133.242C58.666 133.438 60.3047 133.492 61.7969 134.242C64.5898 135.641 64.6387 138.164 61.9082 139.875C59.5312 141.359 39.2754 148.039 27.877 151.102C25.2422 151.805 19.8789 153.023 15.9609 153.805C9.66797 155.062 8.72852 155.359 7.90234 156.328C7.31641 157.016 6.96875 157.969 6.96875 158.883C6.96875 160.156 7.15039 160.414 8.43359 160.953C10.5586 161.859 12.3633 161.414 28.2754 156.117C50.3223 148.773 63.4512 145.07 65.1387 145.719C67.2852 146.547 68.0703 150.258 66.6113 152.68C65.459 154.594 62.125 156.461 37.8047 168.812C25.9258 174.844 15.8652 180.164 15.4473 180.633C14.2148 182.016 14.8379 183.477 16.8945 184.039C18.3516 184.43 18.9414 184.367 21.1055 183.562C24.2578 182.398 28.8691 180.086 34.7168 176.75C49.4766 168.32 68.5977 158.211 69.7754 158.211C71.2773 158.211 72.5254 159.57 73.166 161.906C73.5098 163.148 73.4531 163.594 72.8535 164.414C72.2051 165.297 55.0898 177.359 35.1367 190.992C31.291 193.617 27.8223 196.141 27.4258 196.602C26.0137 198.234 26.832 201.242 28.7637 201.516C30.5293 201.766 28.2988 203.242 56.5195 183.102C69.5723 173.789 75.3477 170.281 77.6328 170.281C78.2852 170.281 79.3086 170.672 79.9043 171.148C82.1953 172.969 82.1543 173.023 66.2871 189.148C57.9375 197.633 49.3398 205.953 46.3906 208.406C43.5332 210.781 41.0801 213.023 40.9414 213.391C40.4746 214.617 40.6816 217.125 41.3281 218.055C42.2188 219.344 43.9277 219.242 45.8691 217.773C46.752 217.117 55.8008 208.109 65.9785 197.773C76.1562 187.43 85 178.695 85.6348 178.352C87.1289 177.547 87.959 177.859 89.1738 179.664L90.166 181.148L88.7871 183.102C88.0273 184.18 83.8145 190.398 79.4219 196.922C70.6211 210 66.377 215.859 61.1426 222.172C57.4844 226.578 56.8086 227.977 57.5996 229.5C58.207 230.672 58.752 231.039 59.8809 231.047C61.8887 231.062 62.6562 230.086 81.3789 203.586C87.7676 194.539 93.6562 186.531 94.4609 185.789C95.2676 185.047 96.3281 184.438 96.8164 184.438C97.9941 184.438 99.4922 186.102 99.4922 187.406C99.4922 189.047 97.6387 194.156 95.1387 199.406C93.8809 202.047 92.2734 205.516 91.5684 207.117C89.7285 211.297 85.4082 219.75 80.9336 227.93C78.8047 231.828 76.7422 235.719 76.3516 236.586C74.918 239.766 75.8086 241.875 78.584 241.875C80.9805 241.875 82.9336 239.07 87.6406 228.852C103.223 195.039 105.752 189.945 107.133 189.594C108.994 189.117 110.115 189.727 110.635 191.484C111.07 192.953 110.641 195.68 106.176 219.656C100.848 248.266 100.877 247.984 103.189 248.953C104.623 249.555 105.904 249.195 106.654 247.984C107.566 246.508 107.818 245.148 113.449 211.414C115.645 198.266 116.732 193.531 117.846 192.281C118.818 191.195 121.34 191.25 122.354 192.391C123.07 193.188 123.119 193.781 122.932 199.359C122.818 202.711 122.727 214.352 122.727 225.227C122.727 244.82 122.734 245.016 123.633 246.719C124.133 247.664 124.842 248.547 125.209 248.695C126.545 249.211 128.293 248.938 129.145 248.07C129.982 247.227 130.004 246.938 129.768 239.852C128.578 204.461 129.16 193.25 132.254 191.82C134.127 190.953 134.863 192.453 137.035 201.531C138.1 205.977 139.236 211.023 139.562 212.742C139.887 214.461 140.453 217.453 140.82 219.398C141.186 221.344 142.213 225.656 143.102 228.977C143.99 232.289 145.275 237.594 145.959 240.758C147.432 247.594 147.982 248.805 149.977 249.648C151.859 250.445 154.275 249.836 155.262 248.312C156.059 247.078 155.938 246.484 152.9 236.672C151.768 233.008 150.584 229.172 150.271 228.141C149.959 227.109 149.41 224.578 149.051 222.523C147.807 215.391 146.699 210.016 145.537 205.453C144.895 202.938 144.051 198.586 143.66 195.781C142.975 190.867 142.977 190.656 143.705 189.836C144.764 188.656 148.426 187.625 149.76 188.141C151.166 188.68 152.4 190.539 153.807 194.242C154.455 195.945 156.521 200.383 158.4 204.102C160.279 207.82 162.713 213.398 163.812 216.484C164.91 219.578 166.883 224.352 168.195 227.102C169.857 230.578 170.725 232.984 171.049 235.008C171.686 239.008 172.15 240.055 173.553 240.648C174.941 241.227 178.154 240.977 179.062 240.211C179.402 239.93 179.68 239.172 179.68 238.531C179.68 237.883 177.668 232.711 175.207 227.031C172.748 221.344 168.668 211.922 166.141 206.086C158.416 188.242 157.102 182.773 160.537 182.773C161.867 182.773 165.068 185.07 167.145 187.508C168.141 188.68 175.303 197.883 183.062 207.953C195.58 224.203 197.309 226.281 198.396 226.383C199.203 226.453 200.041 226.156 200.844 225.492C201.959 224.578 202.02 224.398 201.561 223.383C200.955 222.031 191.889 210.102 179.248 194.008C174.121 187.484 169.594 181.492 169.188 180.688C168.779 179.891 168.43 178.422 168.408 177.43C168.377 175.898 168.57 175.445 169.713 174.414C170.717 173.508 171.467 173.195 172.68 173.195C174.096 173.195 174.764 173.586 177.916 176.266C179.902 177.945 183.195 180.883 185.23 182.773C187.266 184.672 189.949 186.984 191.193 187.914C192.438 188.844 195.213 191.305 197.361 193.383C199.51 195.453 203.211 198.734 205.586 200.672C207.961 202.602 211.219 205.438 212.828 206.969C214.791 208.844 216.33 209.93 217.508 210.289C219.207 210.805 219.295 210.789 220.238 209.68C220.773 209.047 221.213 208.273 221.213 207.961C221.213 206.773 218.668 204.484 205.842 194.117C195.738 185.953 190.867 181.688 185.127 175.953C181 171.828 177.631 168.266 177.641 168.023C177.65 167.773 178.365 166.789 179.23 165.82L180.805 164.055L186.102 167.5C192.033 171.359 200.047 176.25 207.436 180.508C210.15 182.07 215.236 185.219 218.74 187.5C226.02 192.234 227.83 193.156 229.848 193.164C231.906 193.164 232.486 192.68 232.133 191.242C231.699 189.484 230.945 188.82 225.955 185.789C219.936 182.133 200.059 169.219 191.785 163.586C184.355 158.531 183.729 157.789 184.91 155.383C185.312 154.562 186.139 153.531 186.748 153.078C187.822 152.281 187.922 152.281 190.447 152.984C191.875 153.383 199.242 156.438 206.82 159.766C229.174 169.602 229.949 169.922 231.893 170.141C233.174 170.289 234.008 170.164 234.566 169.734C235.311 169.172 235.328 169.023 234.771 167.977C233.877 166.281 232.113 165.266 223.045 161.195C203.281 152.328 192.377 146.945 191.262 145.516C190.014 143.906 190.527 143.547 194.365 143.328C197.273 143.156 198.979 143.477 212.988 146.75C221.469 148.734 231.686 151.188 235.691 152.203C239.695 153.219 243.771 154.055 244.748 154.055C246.918 154.055 248.352 153.125 248.352 151.719C248.352 149.305 245.49 148.094 234.166 145.719C212.402 141.156 197.805 137.664 195.404 136.453C191.998 134.734 192.129 132.172 195.676 131.148C196.49 130.914 205.391 130.547 215.455 130.328C225.52 130.109 236.816 129.867 240.557 129.781C248.131 129.602 249.705 129.203 249.916 127.375C250.141 125.422 249.207 125.125 242.629 125.062C239.33 125.031 226.947 124.844 215.111 124.648L193.588 124.289L192.6 123.125C190.758 120.961 190.785 118.398 192.664 117.156C195.049 115.57 202.717 114.562 223.885 113.047C240.133 111.883 245.322 111.289 247.432 110.344C248.486 109.867 249.494 109.258 249.668 108.977C250.279 108.008 250.008 105.781 249.174 104.938C247.908 103.656 243.273 103.852 229.381 105.773C222.738 106.695 213.697 107.93 209.287 108.516C200.598 109.68 190.225 110.281 189.842 109.656C189.426 108.977 190.842 106.633 192.168 105.805C192.875 105.359 197.896 103.039 203.324 100.648C208.752 98.2578 216.154 94.9922 219.773 93.3906C227.689 89.8984 233.771 87.5703 240.16 85.6094C245.641 83.9219 246.623 83.1719 245.947 81.2109C245.27 79.2422 243.861 77.4609 242.982 77.4609C242.152 77.4609 240.066 78.2969 222.65 85.5859C199.666 95.2031 189.602 99.1094 187.83 99.1094C185.613 99.1094 182.969 96.3516 182.969 94.0469C182.969 91.9062 188.023 88.0312 196.084 83.9688C203.609 80.1875 206.271 78.4766 213.545 72.7656C220.531 67.2812 224.031 64.8672 228.408 62.5C230.217 61.5234 231.834 60.5078 232 60.25C232.459 59.5312 232.373 57.125 231.852 56.1016C231.072 54.5703 229.746 53.3203 228.9 53.3203C228.459 53.3203 226.863 54.4922 225.355 55.9219C219.549 61.4375 187.512 83.375 181.004 86.2969C178.789 87.2891 178.004 87.0391 176.838 84.9375C175.986 83.4062 175.961 83.1797 176.527 82.3359C177.555 80.8203 186.205 71.2266 197.875 58.6719C209.008 46.6875 215.025 39.3125 215.037 37.6172C215.045 36.4141 213.314 35.25 212.01 35.5859C211.078 35.8203 208.98 37.9844 191.01 57.2656C186.951 61.625 180.891 67.9453 177.541 71.3281C172.58 76.3281 171.238 77.4609 170.293 77.4609C169.121 77.4609 167.342 76 167.342 75.0391C167.342 74.1719 172.664 63.75 175.66 58.75C179.449 52.4297 181.566 49.3984 191.264 36.3594C195.734 30.3438 199.586 25.0625 199.822 24.6172C200.457 23.4141 197.824 21.6875 195.361 21.6875C193.77 21.6875 193.35 21.8984 191.859 23.4688C190.928 24.4531 186.002 31.8828 180.912 39.9766C166.084 63.5781 160.99 70.2578 158.549 69.3047C157.148 68.7656 157.812 65.9844 162.242 53.8281C173.451 23.0859 176.438 13.8047 175.75 11.8516C175.365 10.75 173.469 9.49219 171.441 9C170.455 8.75781 170.297 8.97656 168.416 13.2344C167.324 15.7109 163.213 27.5703 159.279 39.5859C155.344 51.6094 151.705 62.1875 151.191 63.1016C149.641 65.8516 146.426 66.1953 145.396 63.7188C144.955 62.6562 145.188 60.4375 147.064 47.8125C149.176 33.6016 149.762 30.6484 151.871 23.5625C152.416 21.7344 153.441 17.375 154.152 13.875C155.211 8.66406 155.369 7.23438 155.023 5.9375C154.41 3.63281 152.092 1.71094 149.922 1.71094C148.363 1.71094 147.355 3.375 146.84 6.79688C142.92 32.8672 140.115 50.5234 139.32 54.1562C138.133 59.5781 137.457 61.1797 136.223 61.4922C134.688 61.8828 132.658 61.1328 132.121 59.9688C131.535 58.6953 130.771 40.2812 130.377 17.875C130.152 5.14844 129.963 1.21875 129.543 0.710938C128.65 -0.382812 125.285 -0.171875 123.879 1.05469ZM117.996 91.0547C117.996 115.195 117.918 114.508 120.711 114.508C123.25 114.508 124.039 113.227 124.311 108.641C126.205 76.7734 126.207 71.9297 124.318 70.3438C124.002 70.0781 122.449 69.7656 120.869 69.6484L117.996 69.4453L117.996 91.0547ZM130.584 70.6094C130.238 70.9609 129.832 71.9141 129.682 72.7188C129.297 74.7969 129.238 111.148 129.619 112.523C130.062 114.125 131.26 114.68 133.029 114.086C134.748 113.508 135.008 113.047 135.688 109.32C136.213 106.438 136.143 98.7344 135.402 78.75C135.17 72.5 135.029 71.3984 134.379 70.7344C133.459 69.8047 131.445 69.7422 130.584 70.6094ZM106.277 72.8359C100.93 74.7969 91.7012 81.6016 85.4277 88.2188C81.0117 92.875 78.1895 96.9688 75.1855 103.062C73.457 106.57 73.127 107.617 73.084 109.719C73.0566 111.094 73.166 112.797 73.3281 113.508L73.623 114.797L78.2305 115.07C85.3574 115.484 110 115.391 111.16 114.945C111.727 114.727 112.379 114.195 112.609 113.758C112.873 113.258 113.074 105.617 113.148 93.1953C113.246 76.9219 113.168 73.3125 112.703 72.7422C111.947 71.8203 108.934 71.8594 106.277 72.8359ZM141.463 72.8359C140.727 74.2266 140.18 92.7031 140.566 103.172C140.852 110.961 141.018 112.562 141.602 113.219C143.191 114.992 153.834 115.953 168.742 115.656C175.545 115.516 180.348 115.25 181.072 114.961C182.24 114.492 182.258 114.445 182.008 112.039C181.494 107.047 178.373 100.141 174.078 94.4844C168.361 86.9531 162.873 81.7109 156.504 77.6953C152.432 75.125 146.369 72.4766 143.875 72.1797C142.186 71.9766 141.871 72.0625 141.463 72.8359ZM151.988 120.32C142.305 120.539 142.174 120.555 141.398 121.523C140.475 122.68 140.395 124.797 141.232 125.914C141.619 126.43 143.012 126.977 145.229 127.469C148.195 128.125 150.705 128.227 164.746 128.234C180.584 128.242 182.699 128.094 183.469 126.867C184.014 126 183.814 122.633 183.162 121.695C182.816 121.195 181.846 120.594 181.004 120.352C179.447 119.914 170.229 119.906 151.988 120.32ZM78.3145 120.734L72.5566 120.961L71.8047 122.523C70.8867 124.422 71.1582 126.078 72.6113 127.461C73.6035 128.406 73.9531 128.461 80.5059 128.602C84.2754 128.68 92.625 128.609 99.0586 128.445L110.756 128.148L111.93 126.961C112.99 125.883 113.092 125.539 112.98 123.367L112.857 120.961L111.006 120.68C108.895 120.359 86.9512 120.398 78.3145 120.734ZM120.053 121.047C118.164 121.75 117.426 123.891 118.42 125.773C119.133 127.117 120.965 127.859 122.129 127.273C124.025 126.312 124.744 123.438 123.525 121.68C122.9 120.773 121.477 120.516 120.053 121.047ZM130.168 121.656C128.719 123.75 129.797 127 131.938 127C134.252 127 135.328 124.5 133.924 122.383C132.738 120.594 131.117 120.281 130.168 121.656ZM156.166 132.398C144.576 132.602 143.904 132.656 142.801 133.492C141.303 134.625 141.299 136.016 142.793 137.141C143.877 137.961 144.645 138.023 156.363 138.297C178.936 138.812 181.674 138.812 182.467 138.297C183.273 137.781 183.971 132.781 183.297 132.344C182.752 132 177.736 132.008 156.166 132.398ZM73.75 132.992C71.6387 133.938 71.2852 136.117 73.0527 137.289C74.0762 137.969 75.623 138.023 92.0723 138.023C108.42 138.023 110.094 137.961 111.309 137.289C113.066 136.32 113.479 134.727 112.283 133.516C111.404 132.625 111.229 132.617 93.209 132.516C78.4746 132.43 74.7832 132.523 73.75 132.992ZM118.818 133.656C118.367 134.117 117.996 134.836 117.996 135.266C117.996 136.258 119.43 138.109 120.459 138.438C121.277 138.703 122.904 138.047 123.439 137.234C124.012 136.367 123.758 134.203 123.002 133.516C121.967 132.562 119.824 132.641 118.818 133.656ZM130.385 134.031C128.924 134.969 130.201 137.82 132.084 137.82C134.43 137.82 135.154 135.945 133.361 134.516C132.203 133.594 131.295 133.445 130.385 134.031ZM76.5879 143.5C74.5137 143.727 74.1992 144.383 74.8203 147.195C75.332 149.492 79.3086 156.562 82.6465 161.094C87.2246 167.32 93.8848 172.844 100.578 175.969C106.848 178.906 110.027 179.633 111.568 178.492C112.234 178 112.277 176.859 112.137 162.781C111.975 146.43 111.779 144.758 109.963 144.055C108.926 143.656 79.5957 143.172 76.5879 143.5ZM141.719 144.164C140.73 144.969 140.504 145.562 140.158 148.227C139.629 152.328 140.141 176.969 140.783 178.281C141.57 179.891 144.52 180.203 148.352 179.086C157.385 176.461 166.883 169.172 172.801 160.32C176.693 154.508 180.422 145.062 179.283 143.914C178.953 143.578 173.588 143.406 160.846 143.328L142.875 143.219L141.719 144.164ZM118.656 144.43C118.029 145.133 117.926 146.898 117.705 160.57C117.443 176.836 117.629 179.273 119.277 181.062C120.906 182.828 123.471 181.773 124.551 178.883C124.863 178.055 124.873 174.555 124.59 167.023C123.832 146.992 123.709 145.992 121.818 144.484C120.502 143.438 119.559 143.422 118.656 144.43ZM129.777 144.68C128.955 146.844 128.633 153.594 128.758 165.984C128.914 181.609 128.896 181.523 131.764 181.523C134.691 181.523 134.857 181.023 134.855 172.172C134.854 160.867 134.098 147.062 133.408 145.711C132.564 144.055 130.26 143.398 129.777 144.68Z"
              fill="#FFC179"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
