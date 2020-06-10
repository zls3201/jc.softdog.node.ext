{
    "targets": [
        {
            "target_name": "hello",
            "sources": ["hello.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ],
            'library_dirs': ['<(module_root_dir)'],
            "libraries": ["-l<(module_root_dir)/libdog_windows_x64_3156986.lib", "-llegacy_stdio_definitions.lib"]
        }
    ]

}
