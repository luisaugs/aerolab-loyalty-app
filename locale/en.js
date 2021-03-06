export default {
    ModuleAeroPay: {
        header: "Add Blance",
        btn: {
            textPre: "",
            textEnd: "Add Points",
            textPreDisabled: "",
            textEndDisabled: "Adding points..."
        }
    },
    Landing: {
        span: "Explore the",
        def_text: "Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech",
        btn: "view all products"
    },
    Section: [
        {
            card_1: {
                title: "1—browse",
                body: "Browse our tech catalog with more than 20 top tech products"
            }
        },
        {
            card_2: {
                title: "2—choose",
                body: "Exchange your hard earned AeroPoints for the item you want"
            }
        },
        {
            card_3: {
                title: "3—enjoy",
                body: "All done, you can relax! We’ll take care of delivery of your tech item!"
            }
        },
    ],
    TechProducts: {
        title: {
            h2: "tech",
            span: "products"
        },
        sortBy: "Sort by:",
        btnCost:"cost",
        btnType:"name",
        dropdown: ["All products", "Laptops", "Tablets", "Cameras"],
        button: {
            textPre: "Redeem for",
            textPreDisabled: "You need",
            textEnd: "",
            textEndDisabled: ""
        },
        buttonProcessing: {
            textPre: "",
            textPreDisabled: "Processing...",
            textEnd: "",
            textEndDisabled: ""
        },
        pager: {
            page: "Page",
            of: "of"
        }

    },
    history:{
        header: "last products redeemed",
        card:{
            price:"cost: ",
            date:"date: "
        }
    },
    toast:{
        ok:"redeemed successfully.",
        error:"There was a problem with the transaction."
    }, 
    footer: "View this repository"
}