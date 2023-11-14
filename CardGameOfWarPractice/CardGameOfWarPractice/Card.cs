using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CardGameOfWarPractice
{
    internal class Card
    {
        //Properties of Card
        public string Suit { get; set; }
        public int Value { get; set; }


        public Card(string suit, int value)
        {
            this.Suit = suit;
            this.Value = value;
        }


        public override string ToString() 
        {

            return $"{Value} of {Suit}";

        }



    }
}
