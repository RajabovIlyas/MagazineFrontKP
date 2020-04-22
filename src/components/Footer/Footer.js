import React from "react";
import classes from './Footer.module.css';
import { InstagramOutlined,GoogleOutlined,LinkedinOutlined ,SkypeOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Layout} from "antd";

const { Footer } = Layout;

const Footer_foot = (props) => {
    return (
        <Footer className={classes.footer} >
            <div>
            <a href={'http://www.instagram.com/rajabowilyas/'} target="_blank">
            <InstagramOutlined />
            </a>
            <span/>
            <a href={'mailto:rajabowilyas@gmail.com'}>
                <GoogleOutlined />
            </a>
            <a href={'skype:ilyasrajabow@gmail.com'}>
           <SkypeOutlined/>
            </a>
            <a href={'https://www.linkedin.com/in/ilyas-rajabov-8aa7a41a1/'} target="_blank">
                <LinkedinOutlined />
            </a>
            </div>
            <div>
                <h5>© 2020–2020 Интернет-магазин «Tehino.by»</h5>
            </div>
        </Footer>
    );
};

export default Footer_foot;