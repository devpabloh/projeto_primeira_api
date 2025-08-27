import eslintJS from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
    {
        ignores: ['node_modules', 'dist', '*.js'],
    },

    eslintJS.configs.recommended,

    ...tseslint.configs.recommended,

    ...tseslint.configs.stylistic,

    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/export': 'error'
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            "comelcase": "off",
            "import/no-unresolved": "error",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "seletor": "interface",
                    "format": ["PascalCase"],
                    "custom":{
                        "regex": "^I[A-Z]",
                        "match": true
                    }
                }
            ],
            "class-methods-use-this": "off",
            "import/prefer-default-export": "off",
			"no-shadow": "off",
			"no-console": "off",
			"no-useless-constructor": "off",
			"no-empty-function": "off",
			"lines-between-class-members": "off",
            "import/extensions": [
			    "error",
			    "ignorePackages",
		            {
			            "ts": "never"
			        }
			],
            "import-helpers/order-imports": [
			  "warn",
			  {
			    "newlinesBetween": "always",
			    "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
			    "alphabetize": { "order": "asc", "ignoreCase": true }
			  }
			],
            "import/no-extraneous-dependencies": [
			  "error",
			  { "devDependencies": ["**/*.spec.js"] }
			]
        },
        "settings": {
            "import/resolver": {
                "typescript": {}
            }
        }
    },

    eslintConfigPrettier // Essa importação deve ficar por último
)