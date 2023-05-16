function Flex ( {children}) {
    const FlexStyle ={
        display: "flex",
        justifyContent: "space-around",
        flexwrap: "wrap",
    }
    return ( <div style={FlexStyle}> {children}</div>);
}

export default Flex;