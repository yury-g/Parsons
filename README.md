#### Parsons

### Student Repo's
1. cpb-aacip-15-79v15vkq_pbcore.xml - Drew Example
1. cpb-aacip-500-6m335r61_pbcore.xml -- Adam Example
1. cpb-aacip-500-6h4csj1p_pbcore.xml -- Julie Example


### Helpful Hints
1. Jean-pierre's original stylesheet expects `<pbcoreCollection>` as the root 
element, so make sure your xml file has that going on.

### Converting
There is a provided ruby script to convert individual XML files. To do this, 
you'll need ruby as well as the bunder gem. With the `ruby`, `gem` and `git` 
executables installed:

```
git clone https://github.com/WGBH/pbucore
cd pbucore
gem install bundler
bundle install
ruby lib/converter.rb ~/my-pbcore.xml > ~/my-rdf.xml
```

### Workflow for mapping PBCore elements to EBUCore RDF-XML.
_This is for members of WGBH/MLA Github team. If you are not a member of that 
group, then you can still submit issues and make comments, but you won't be 
able to push branches. You do not have to be an employee of WGBH to be a member 
of the WGBH/MLA Github team. If you would like to become a member, contact an 
existing member._

UPDATE: There is now [a detailed document in the wiki for contributing to this 
project through the Github web interface](http://soundbible.com/royalty-free-sounds-1.html).
Please refer to that if you do not plan to use `git` from the command line. 
Otherwise, the steps below are still applicable.
