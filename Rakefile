desc "Package the project for deploying to WordPress.org"
task :package do
  cmds = [
    'cp -R ./ ../the-city-login',
    'cd ../',
    'rm -rf ./the-city-login/.git',
    'rm -f ./the-city-login/README.rdoc',
    'rm -f ./the-city-login/changelog',
    'rm -f ./the-city-login/Rakefile',
    'zip -r the-city-login.zip ./the-city-login',
    'rm -rf the-city-login'
  ]

  `#{cmds.join(' ; ')}`
end
