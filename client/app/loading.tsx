import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import './loading.scss';

// define the Next.js skeleton like loader for making visible the loading proccess
const Loading: FC = () => {
    return (
        <ContentLoader
            className={"loader-container"}
            viewBox="0 0 1700 1700"
            height="1700"
            width="1700"
        >
            <rect key={`load-1`} className={"search-block"} y="10" rx="8" ry="8" />

            <rect key={`load-2`} className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect key={`load-3`} className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect key={`load-4`} className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-5`} className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect key={`load-6`} className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect key={`load-7`} className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-8`} className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect key={`load-9`} className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect key={`load-10`} className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-11`} className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect key={`load-12`} className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect key={`load-13`} className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-14`} className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect key={`load-15`} className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect key={`load-16`} className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-17`} className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect key={`load-18`} className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect key={`load-19`} className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-20`} className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect key={`load-21`} className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect key={`load-22`} className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />

            <rect key={`load-23`} className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect key={`load-24`} className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect key={`load-25`} className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
    );
};

export default Loading;
