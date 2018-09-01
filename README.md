# Basic
SPA built with React, SASS, Gulp, and Webpack. Built in support for automatic responsive image resizing and json template for text content.
Minimized, optimized, and ready to be built. Production from "public" folder.

### Server and Build
run "gulp start" for server, includes webpack-dev-server and watching of templates
run "gulp build" for build, includes cleaning output files and webpack

### App Name
Alter webpack config "appTitle"

# Templates
## Data Template
Text content, needs positioning for images to be placed. E.g. "navigation.logo" -> "navigation.{image from template}"
Completed JSON file in ./src/data/[name].json

## Responsive Images
Place html images in src/assets/images, css images in src/assets/images-css, svg images in src/assets/icons
Make a ResponsiveImage using "image" prop set to an image from template in generated json, with "className" and "alt" props optional

### Image Templates

#### HTML Image Template
```json
{
    "path": "*.*.*"(or "path": * . [].*and "set"
        array of below),
    "alt": "",
    "files": ""(or[""]),
    "imageTemplate": {
        "img": {
            "sizes": "",
            "src": "[name][extension]",
            "srcset": [{
                "src": "[name][extension]",
                "size": #
            }]
        },
        "sources": [{
            "media": "",
            "sizes": "",
            "src": "[name][extension]",
            "srcset": [{
                "src": "[name][extension]",
                "size": #
            }]
        }]
    }
}
```

#### Image-CSS Template
```json
{
    "items": [{
        "src": "",
        "alternates": [{
            "filename": "[name][extension]",
            "size": #
        }]
    }]
}
```