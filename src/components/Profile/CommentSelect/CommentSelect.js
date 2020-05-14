import React from "react";
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import {Comment, Tooltip, List, Avatar} from 'antd';
import {getNiceDate} from "../../../utils";

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];


export default (props) => {
    console.log('ilyas:',props.comments);
    return (
        <>
            <List style={{margin: '16px 16px'}}
                  className="comment-list"
                  header={`${props.comments.length} replies`}
                  itemLayout="horizontal"
                  dataSource={props.comments}
                  renderItem={item => (
                      <li>
                          <Comment
                              actions={<span key="comment-list-reply-to-0">Reply to</span>}
                              author={item.nameUser}
                              avatar={<Avatar
                                  style={{
                                      backgroundColor: ColorList[Math.floor(Math.random() * Math.floor(4))],
                                      verticalAlign: 'middle',
                                      top:'-4px',
                                      margin: '0 20px',
                                  }}
                                  size="large"
                              >
                                  {item.nameUser!==null?item.nameUser[0]:'?'}
                              </Avatar>}
                              content={<p>
                                  {item.commentUser}
                              </p>}
                              datetime={getNiceDate(item.dateSelect)}
                          />
                      </li>
                  )}
            />
        </>)
};