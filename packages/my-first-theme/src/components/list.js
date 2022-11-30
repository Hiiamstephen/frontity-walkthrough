// contain a component called <List>
import React from "react"
import { connect, styled } from "frontity"
// need to store link url so we import Link in list.js
import Link from "@frontity/components/link"


const List = ({ state, actions }) => { // also a functional component
    // get the attributes in the url
    const data = state.source.get(state.router.link)

    return (
        <Items>
            {data.items.map((item) => { //item is the element in the data array we are iterating
                const post = state.source[item.type][item.id]
                return (
                    // assign item.id as key and post.link as link
                    // eventually return a link which showing the title of the link
                    <Link key={item.id} link={post.link}>
                        {post.title.rendered} 
                    </Link>
                )
            })}

            <PrevNextNav>
                {data.previous && (
                    <button
                        onClick={() => {
                            actions.router.set(data.previous)
                        }}
                    >
                        &#171; Prev
                    </button>
                )}

                {data.next && (
                    <button
                        onClick={() => {
                            actions.router.set(data.next)
                        }}
                    >
                        Next &#187;
                    </button>
                )}
            </PrevNextNav>
        </Items>
    )
}

export default connect(List)

const Items = styled.div`
    & > a {
        display: block;
        margin: 6px 0;
        font-size: 1.2em;
        color: steelblue;
        text-decoration: none;
    }
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`