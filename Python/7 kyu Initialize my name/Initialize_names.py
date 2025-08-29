# Some people just have a first name; some people have first and last names and some people have first, middle and last names.

# You task is to initialize the middle names (if there is any).
# Examples

# 'Jack Ryan'                   => 'Jack Ryan'
# 'Lois Mary Lane'              => 'Lois M. Lane'
# 'Dimitri'                     => 'Dimitri'
# 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

# Solution

def initialize_names(name):
    parts = name.split()

    first_name = parts[0]
    last_name = parts[-1] if len(parts) > 1 else ''
    middle_names = parts[1:-1]

    initialized_middle_names = ' '.join(f"{middle[0]}." for middle in middle_names)

    return ' '.join(filter(None, [first_name, initialized_middle_names, last_name]))

