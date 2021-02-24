import passport from "passport";
import GitHubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import NaverStrategy from "passport-naver";
import {
  githubLoginCallback,
  kakaoLoginCallback,
  naverLoginCallback,
} from "./controllers/userController";
import routes from "./routes";
import User from "./models/User";

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      redirect_uri: `http://localhost:4000/${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: `http://localhost:4000/${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: `http://localhost:4000/${routes.naverCallback}`,
    },
    naverLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
