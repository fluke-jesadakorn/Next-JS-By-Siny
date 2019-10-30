import React from 'react'
import Link from 'next/link'
export default class Index extends React.Component{
    render(){
        return(
            <div>
                <h3>Hello</h3>
                <Link href="/manage">
                    <a>To Manage</a>
                </Link>
                <style jsx>{`
                    h3{
                        color:red,
                    }
                    h3:hover{
                        color:blue,
                    }
                `}</style>
            </div>
        )
    }
}