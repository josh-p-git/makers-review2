# makers-review2

digital audio workstation plugins, musicians apply filters to change tracks sound. want to a band pass filter.

takes a soundwave - returns a soundwave same length as input.
soundwave is an array of frequencies, each one is an integer.

return array - after having modified it.


default upper and lower limits - default lower 40, upper 1000.
any freq below 40 are bought up to 40, anyything above 1000 brought down to 1000

[60,10,45,60,1500]
[60,40,45,60,1000]

if not correct e.g not integer, null, raise error saying input is corrupted - even if other values are correct

itterate over the array, see if the number is lower than 40, if so make it equal to 40
see if number is higher than 1000, if so reduce to 1000.
after this itteration put into an array,

returns error if input is not an integer