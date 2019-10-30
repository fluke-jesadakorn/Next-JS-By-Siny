import Link from 'next/link'
const MainLayout = props => {
    return (
        <div className = 'container'>
                <div className = 'topbar'>
                    <div className = 'logo-container'>
                    <Link href= '/'><a>Stock</a></Link>
                    </div> 
                    <div id = 'menu-container'>
                    <Link href= '/manage'><a>Manage</a></Link>
                    <Link href= '/product'><a>Product</a></Link>
                    <Link href= '/profile'><a>Profile</a></Link>
                    </div>
                    </div>
                    <div>
                        {props.chidren}
                    </div>
                <style jsx>{`
                    .topbar {
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding:20px 40px;
                    }
                    .menu-container{
                        display:flex;
                        padding : 5px;

                    }
                    .menu-container div{
                        margin:left;
                        
                    }
                `}</style>

                <style jsx global>{`
                @font-face{
                    font-family: Roboto;
                    src: url(/static/fonts/Roboto-Regular.ttf);
                    font-weight: 400;
                }
                body{
                    margin:0;
                    font-family: 'Roboto';
                }
                `}</style>
            </div>
    )
}
export default MainLayout