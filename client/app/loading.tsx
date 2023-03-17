import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import './loading.scss';

const Loading: FC = () => {
    return (
        <ContentLoader
            className={"loader-container"}
            viewBox="0 0 1700 100%"
            height="1300"
            width="100%"
        >
            <rect className={"search-block"} y="10" rx="8" ry="8" />

            <rect className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />

            <rect className={"block main-block"} y="100" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="530" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="555" rx="0" ry="0" width="120" height="20" />


            <rect className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />

            <rect className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />

            <rect className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />

            <rect className={"block main-block"} y="620" rx="8" ry="8" height="400" />
            <rect className={"block head-block"} y="1050" rx="0" ry="0" height="18" />
            <rect className={"block secondary-block"} y="1075" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
    );
};

export default Loading;
