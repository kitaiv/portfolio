import React from "react";
import { motion } from "framer-motion";
import { AnimationTab } from "../types";

type PropTypes = {
    animateTab: AnimationTab
}

const WithAnimation = (Component: React.ElementType) => {
    
    
    return (props: PropTypes) => (
        <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={props.animateTab.initialX}
            animate={props.animateTab.animateX}
            style={{ willChange: "transform" }}
        >
            <Component {...props} />
        </motion.div>
    )
}

export default WithAnimation