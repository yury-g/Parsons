#### Week 1 Class Notes


Use Chrome, our your IDE of choice. 

MarkUp on Github:  https://github.com/github/markup

Cool Resource: https://jsfiddle.net/


Magic Words in Chrome: about:blank


In Console Type:

```ruby

3 + 5
> 8
"Hi, I'm an String"
> "Hi, I'm an String"
true
> true
false
> false
9999999999 * 99999999236541 / 4.177
> 2.394062705926287e+23
"ABCDEFGHIJK".length
> 11
"ABCDEFGHIJK".slice(0,4);
> "ABCD"

```

And a convenience form:

```ruby
require 'github/markup'

GitHub::Markup.render_s(GitHub::Markups::MARKUP_MARKDOWN, "* One\n* Two")
```

