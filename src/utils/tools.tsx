import HTMLIcon from "@public/assets/icons/html5.svg";
import SassIcon from "@public/assets/icons/sass.svg";
import BootstrapIcon from "@public/assets/icons/bootstrap.svg";
import StyledComponentsIcon from "@public/assets/icons/styled-components.svg";
import JSIcon from "@public/assets/icons/es6.svg";
import GulpIcon from "@public/assets/icons/gulp.svg";
import WebpackIcon from "@public/assets/icons/webpack.svg";
import ReactIcon from "@public/assets/icons/react.svg";
import ReduxIcon from "@public/assets/icons/redux.svg";
import NextIcon from "@public/assets/icons/next-js.svg";
import CSSIcon from "@public/assets/icons/css3.svg";
import GitIcon from "@public/assets/icons/git.svg";
import TailwindCSS from "@public/assets/icons/tailwind-css.svg";
import MaterialUIIcon from "@public/assets/icons/material-ui.svg";
import EslintIcon from "@public/assets/icons/eslint.svg";
import NPMIcon from "@public/assets/icons/npm.svg";

import Image from "next/image";
import { ReactElement } from "react";

export type experienceObjectType = {
  title: JSX.Element;
  icons: Array<ReactElement<HTMLImageElement>>;
};
const experiences: Array<experienceObjectType> = [
  {
    title: (
      <h6>
        <span className="font-bold">Front-End</span> Dev Gear.
      </h6>
    ),
    icons: [
      <Image
        src={HTMLIcon}
        width={45}
        height={45}
        alt="html5-icon"
        title="HTML5"
      />,
      <Image src={CSSIcon} width={45} height={45} alt="css-icon" title="CSS" />,
      <Image
        src={SassIcon}
        width={45}
        height={45}
        alt="sass-icon"
        title="Sass"
      />,
      <Image
        src={BootstrapIcon}
        width={45}
        height={45}
        alt="bootstrap-icon"
        title="Bootstrap"
      />,
      <Image
        src={TailwindCSS}
        width={45}
        height={45}
        alt="tailwind-css-icon"
        title="Tailwind css"
      />,
      <Image src={GitIcon} width={45} height={45} alt="git-icon" title="Git" />,
      <Image
        src={StyledComponentsIcon}
        width={45}
        height={45}
        alt="styled-component-icon"
        title="Styled components"
      />,
      <Image
        src={JSIcon}
        width={45}
        height={45}
        alt="js-icons"
        title="Javascript"
      />,
      <Image src={NPMIcon} width={45} height={45} alt="npm-icon" title="NPM" />,
      <Image
        src={GulpIcon}
        width={25}
        height={25}
        alt="gulp-icon"
        title="Gulp"
      />,
      <Image
        src={WebpackIcon}
        width={45}
        height={45}
        alt="webpack-icon"
        title="Webpack"
      />,
      <Image
        src={EslintIcon}
        width={45}
        height={45}
        alt="eslintIcon-icon"
        title="Eslint"
      />,
      <Image
        src={MaterialUIIcon}
        width={45}
        height={45}
        alt="material-icon"
        title="Material-UI"
      />,
      <Image
        src={ReactIcon}
        width={45}
        height={45}
        alt="react-icon"
        title="React"
      />,
      <Image
        src={ReduxIcon}
        width={45}
        height={45}
        alt="redux-icon"
        title="Redux"
      />,
      <Image
        src={NextIcon}
        width={45}
        height={45}
        alt="next-icon"
        title="Next"
      />,
    ],
  },
];

export default experiences;
