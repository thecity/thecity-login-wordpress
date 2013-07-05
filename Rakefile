desc "Package the project for deploying to WordPress.org"
task :package do
  cmds = [
    'cp -R ./ ../the-city-login',
    'cd ../',
    'rm -rf ./the-city-login/.git',
    'rm -f ./the-city-login/README.rdoc',
    'rm -f ./the-city-login/changelog',
    'rm -f ./the-city-login/Rakefile',
    'rm -f ./the-city-login/notes.txt',
    'zip -r the-city-login.zip ./the-city-login',
    'rm -rf the-city-login'
  ]

  `#{cmds.join(' ; ')}`
end

desc "Copy files that would go in the package [for deploying to WordPress.org] to a path"
task :package_to_path, :path do |t, args|
  cmds = [
    'cp -R ./ ../the-city-login',
    'cd ../',
    'rm -rf ./the-city-login/.git',
    'rm -f ./the-city-login/README.rdoc',
    'rm -f ./the-city-login/changelog',
    'rm -f ./the-city-login/Rakefile',
    'rm -f ./the-city-login/notes.txt',
    "cp -R ./the-city-login/* #{args[:path]}",
    'rm -rf the-city-login'
  ]

  `#{cmds.join(' ; ')}`
end