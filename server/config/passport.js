const lodash = require('lodash');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const extractJwt = passportJwt.ExtractJwt;
const dotenv = require('dotenv').config().parsed;

let user = require('../models').User;

module.exports = () => {
  // Local Strategy
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    // 이 부분에선 저장되어 있는 User를 비교하면 된다. 
    return user.findOne({where: {email: email, password: password}})
        .then(user => {
            if (!user) {
                return done(null, false, {message: 'Incorrect email or password.'});
            }
            return done(null, user, {message: 'Logged In Successfully'});
        })
        .catch(err => done(err));
    }
  ));

  // JWT Strategy
  // not used
  passport.use(new JwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : dotenv.JWT_SECRET
  }, async (jwtPayload, done) => {
    return user.findOneById(jwtPayload.id).then(user => {
      return done(null, user);
    }).catch(err => {
      return done(err);
    });
  }));

  // Google Strategy
  passport.use(new GoogleStrategy({
    clientID: dotenv.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: dotenv.GOOGLE_AUTH_SECRET,
    callbackURL: `${dotenv.APP_DOMAIN}/auth/google/callback`
  },
  function(token, tokenSecret, profile, done) {
    user.findOrCreate({ 
        where: { googleId: profile.id },
        defaults: {
          name: lodash.get(profile, 'displayName'),
          email: lodash.get(profile, 'email'),
        }
      }).then(user => {
        return done(null, user);
      });
    
  }));

  // KaKao Strategy
  passport.use(new KakaoStrategy({
    clientID : dotenv.KAKAO_AUTH_CLIENT_ID,
    clientSecret: '', // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
    callbackURL : `${dotenv.APP_DOMAIN}/auth/kakao/callback`
  }, (accessToken, refreshToken, profile, done) => {
    user.findOrCreate({ 
      where: { naverId: profile.id },
      defaults: {
        name: lodash.get(profile, 'displayName'),
        email: lodash.get(profile, 'email', ''),
      }
    }).then(user => {
      return done(null, user);
    });
    return done(null, user);
  }));

  // Naver Strategy
  passport.use(new NaverStrategy({
    clientID: dotenv.NAVER_AUTH_CLIENT_ID,
    clientSecret: dotenv.NAVER_AUTH_SECRET,
    callbackURL: `${dotenv.APP_DOMAIN}/auth/kakao/callback`
  }, function(accessToken, refreshToken, profile, done) {

    console.log(profile);
    // user.findOrCreate({ 
    //   where: { naverId: profile.id },
    //   defaults: {
    //     name: lodash.get(profile, 'displayName'),
    //     email: lodash.get(profile, 'email', ''),
    //   }
    // }).then(user => {
    //   return done(null, user);
    // });
    //return done(null, user);


    // User.findOne({
    //     'naver.id': profile.id
    // }, function(err, user) {
    //     if (!user) {
    //         user = new User({
    //             name: profile.displayName,
    //             email: profile.emails[0].value,
    //             username: profile.displayName,
    //             provider: 'naver',
    //             naver: profile._json
    //         });
    //         user.save(function(err) {
    //             if (err) console.log(err);
    //             return done(err, user);
    //         });
    //     } else {
    //         return done(err, user);
    //     }
    // });
  }));
}
