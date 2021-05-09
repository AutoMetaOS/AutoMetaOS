// #![feature(decl_macro)]

// use rocket::{self, get, routes};
// use std::collections::HashMap;

#[tokio::main]
async fn get_google() -> Result<String, Box<(dyn std::error::Error + 'static)>> {
    // .json::<HashMap<String, String>>()
    let _resp = reqwest::get("https://www.google.com/search?client=toolbar&source=hp&q=Jessica+Chastain")
        .await?
        .text()
        .await?;
        // println!("{:#?}", resp);
        Ok(resp);
    }

// #[get("/hello")]
// fn hello() -> & 'static str {
//     "Hello, Rust"
// }

// #[get("/hello/<name>")]
// fn hello_name(name: String) -> String {
//     format!("{}", getGoogle())
// }

fn main() {
    println!("{:#?}", getGoogle());
//     rocket::ignite()
//                 .mount("/",routes![hello, hello_name])
//                 .launch();
}
