// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{AppHandle, Manager};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Learn more about Tauri Specta at https://github.com/oscartbeaumont/tauri-specta/blob/main/docs/v2.md
#[tauri::command]
#[specta::specta]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    let invoke_handler = {
        // You can use `tauri_specta::js::builder` for exporting JS Doc instead of Typescript!`
        let builder = tauri_specta::ts::builder().commands(tauri_specta::collect_commands![greet,]); // <- Each of your commands

        #[cfg(debug_assertions)] // <- Only export on non-release builds
        let builder = builder.path("../src/generated/tauri-commands.ts");

        builder.build().unwrap()
    };

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(invoke_handler)
        .on_window_event(|window, event| match event {
            tauri::WindowEvent::CloseRequested { api, .. } => {
                // hide main window instead of closing it
                // because otherwise the app will exit if there's no window left
                if window.label() == "main" {
                    AppHandle::hide(window.app_handle()).unwrap();
                    api.prevent_close();
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
