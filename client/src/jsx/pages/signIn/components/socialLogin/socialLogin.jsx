import React from 'react';
import styles from './socialLogin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import axios from 'axios';
library.add(fab);
const SocialLogin = () => {
  const responseGoogle = async (res) => {
    console.log(res);
    // console.log(res);
    // await axios
    //   .get('/api/user')
    //   .then((res) => {
    //     console.log(res.data);
    //     alert('로그인 성공');
    //   })
    //   .catch((err) => console.error(err));
  };

  const responseKakao = (res) => {
    console.log(res);
  };
  return (
    <div className={styles.socialLogin}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <button
            className={styles.fontBtn}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FontAwesomeIcon className={styles.icon} icon={['fab', 'google']} />
          </button>
        )}
      />
      <button className={styles.fontBtn}>
        <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
      </button>
      <button className={styles.fontBtn}>
        <img
          src="/images/naverLogo.png"
          alt="logo"
          className={`${styles.icon} ${styles.iconSize}`}
        />
      </button>
      <KakaoLogin
        token={process.env.REACT_APP_KAKAO_CLIENT_ID}
        onSuccess={responseKakao}
        onFail={responseKakao}
        // onLogout={}
        render={({ onClick }) => {
          return (
            <button className={styles.fontBtn} onClick={onClick}>
              <img
                src="/images/kakaoLogo.png"
                alt="logo"
                className={`${styles.icon} ${styles.iconSize}`}
              />
            </button>
          );
        }}
      />
    </div>
  );
};

export default SocialLogin;
